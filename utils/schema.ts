import { date, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const aiOutput = pgTable("aiOutput", {
    id: text("id").primaryKey(),
    formData: varchar("form_data").notNull(),
    aiResponse: text("ai_response"),
    templateSlug: varchar("slug").notNull(),

    createdBy: varchar("created_by").notNull(),
    createdAt: date("createdAt").notNull(),
});