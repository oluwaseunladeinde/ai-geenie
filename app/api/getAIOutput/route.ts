import { db } from "@/db/drizzle";
import { AIOutput, aiOutput } from "@/db/schema";
import { auth, currentUser, getAuth } from "@clerk/nextjs/server";
import { asc, desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { userId } = auth();
    const user = await currentUser();
    if (!userId || !user) {
        return new NextResponse('unauthorized', { status: 401 });
    }

    try {
        const data = await db
            .select({
                output: aiOutput.aiResponse,
                date: aiOutput.createdAt,
                slug: aiOutput.templateSlug,
            })
            .from(aiOutput)
            .where(eq(aiOutput.createdBy, user?.primaryEmailAddress?.emailAddress!))
            .orderBy(desc(aiOutput.createdBy));
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse('error getting list of saved to database', { status: 500 });
    }
}