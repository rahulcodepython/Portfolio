import Database from "better-sqlite3";
import fs from "fs";
import { join } from "path";
import { createsettingsIfNotExists } from "./queries/settings.queries";

function initializeTable(database: Database.Database) {
  const schemaPath = join(process.cwd(), "scripts", process.env.DB_INITIALIZE_SCRIPT!)
  const schema = fs.readFileSync(schemaPath, "utf-8")
  database.exec(schema)
}

const DB_PATH = join(process.cwd(), process.env.DB_FILE_NAME!);

const isNewDb = !fs.existsSync(DB_PATH);

const db = new Database(DB_PATH);

if (isNewDb) {
  db.pragma("journal_mode = WAL");
  initializeTable(db);
  createsettingsIfNotExists(db)
}

export default db