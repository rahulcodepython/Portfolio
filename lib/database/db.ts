import fs from 'fs';
import { join } from 'path';
import { Pool } from 'pg';

// Extend global type to include our cached pool
declare global {
    // eslint-disable-next-line no-var
    var cachedPool: Pool | undefined;
    // eslint-disable-next-line no-var
    var dbInitialized: boolean | undefined;
}

// Use a global variable to preserve the connection pool across HMR reloads in development
let pool: Pool;

if (process.env.NODE_ENV === 'production') {
    // In production, create a new pool
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
} else {
    // In development, reuse the pool across HMR reloads
    if (!global.cachedPool) {
        global.cachedPool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false,
            },
        });
    }
    pool = global.cachedPool;
}

// Initialize database tables
async function initializeDatabase() {
    try {
        const schemaPath = join(process.cwd(), 'scripts', 'init-db.sql');
        const schema = fs.readFileSync(schemaPath, 'utf-8');

        await pool.query(schema);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
}

// Handle pool errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Initialize database only once (even across HMR reloads)
if (!global.dbInitialized) {
    initializeDatabase()
        .then(() => {
            global.dbInitialized = true;
        })
        .catch((err) => {
            console.error('Failed to initialize database:', err);
        });
}

export default pool;