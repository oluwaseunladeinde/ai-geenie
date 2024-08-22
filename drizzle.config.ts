import { config } from "dotenv";
import { defineConfig } from 'drizzle-kit';

config({ path: ".env.local" });

export default defineConfig({
    schema: "./utils/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL!,
    },
    verbose: true,
    strict: true,
})