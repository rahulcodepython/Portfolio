import fs from 'fs';
import { join } from 'path';
import { Pool } from 'pg';

// Create a PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

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

// Test connection and initialize if needed
pool.on('connect', () => {
    console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Initialize database on first import
let initialized = false;
if (!initialized) {
    initializeDatabase()
        .then(() => {
            initialized = true;
        })
        .catch((err) => {
            console.error('Failed to initialize database:', err);
        });
}

export default pool;