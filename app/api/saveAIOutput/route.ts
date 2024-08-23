
import { db } from "@/db/drizzle";

import moment from 'moment';

import { aiOutput } from "@/db/schema";
import { } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { createId } from "@paralleldrive/cuid2";


export async function POST(req: Request) {
    try {
        const { email, aioutput, formData, templateSlug } = await req.json();
        const aiOutput_ids = await db.insert(aiOutput).values({
            id: createId(),
            formData,
            templateSlug,
            aiResponse: aioutput,
            createdBy: email,
            createdAt: moment().format('DD/MM/YYYY'),
        }).returning({
            insertedId: aiOutput.id,
        });

        return NextResponse.json({
            output_id: aiOutput_ids[0].insertedId,
        });

    } catch (error) {
        console.error(error);
        return new NextResponse('error saving to database', { status: 500 });
    }

    const body = await req.json();
    const { formData, templateSlug, output, email } = body;




}