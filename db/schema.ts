import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const aiOutput = pgTable("aiOutput", {
    id: text("id").primaryKey(),
    formData: varchar("form_data").notNull(),
    aiResponse: text("ai_response"),
    templateSlug: varchar("slug").notNull(),
    createdBy: varchar("created_by").notNull(),
    createdAt: varchar("createdAt").notNull(),
});

