import { db } from '../db/drizzle';

import { toast } from 'sonner';
import moment from 'moment';

import { aiOutput } from "../db/schema";

import { createId } from "@paralleldrive/cuid2";

import { useMutation, useQueryClient } from "@tanstack/react-query";


interface OutputProps {
    templateSlug: string;
    output: string;
    email: string;
    formData: any;

}

export const saveOutputToDB = ({ templateSlug, output, email, formData }: OutputProps) => {

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (json) => {
            const result = await db.insert(aiOutput).values({
                id: createId(),
                formData: formData,
                templateSlug: templateSlug,
                aiResponse: output,
                createdBy: email,
                createdAt: moment().format('DD/MM/YYYY'),
            });
            return result;
        },
        onSuccess: () => {
            toast.success("Ai Output saved successfully.");
            //queryClient.invalidateQueries({ queryKey: ["transactions"] });
        },
        onError: (response) => {
            toast.error("Failed to save the Ai Output");
        }

    });
}
