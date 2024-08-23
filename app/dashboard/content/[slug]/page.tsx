"use client";

import { useState } from 'react';
import axios from "axios";

import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { FormSection } from '../_components/FormSection';
import { DisplayOutputSection } from '../_components/DisplayOutputSection';
import { TEMPLATE, TEMPLATELIST } from '@/app/(data)/templates';
import Link from 'next/link';
import { AIModel } from '@/utils/AIModel';

import { useUser } from '@clerk/nextjs';

import { saveOutputToDB } from '@/actions/save-aioutput';
import { useMutation } from '@tanstack/react-query';

interface TemplateProps {
    params: {
        slug: string;
    }
};

const CreateContentPage = (props: TemplateProps) => {

    const [isLoading, setIsLoading] = useState(false);
    const [aiOutput, setAIOutput] = useState<string>('');
    const [userFormData, setUserFormData] = useState(undefined);

    const { user } = useUser();

    const selectedTemplate: TEMPLATE | undefined = TEMPLATELIST?.find((template) => template.slug === props.params.slug);

    const generateAIContent = async (formData: any) => {
        setIsLoading(true);
        setUserFormData(formData);

        try {
            const aiPrompt = `${JSON.stringify(formData)},${selectedTemplate?.aiPrompt!}`;

            const result = await AIModel.generateContent(aiPrompt);
            const response = result.response;
            const text = response.text();
            if (text) {
                setAIOutput(text);
                saveToDatabase.mutate(text);
            }
            setIsLoading(false);
        } catch (error) {
            console.log("the error is ", error);
            setIsLoading(false);
            setAIOutput('');
        }
    };

    const saveToDatabase = useMutation({
        mutationFn: async (output: string) => {
            const response = await axios.post('/api/saveAIOutput', {
                email: user?.primaryEmailAddress?.emailAddress,
                aioutput: output,
                formData: userFormData,
                templateSlug: selectedTemplate?.slug,
            });

            console.log({ data: response.data });
            return response.data;
        }
    })


    return (
        <div className='p-10 gap-y-4'>
            <Link href={"/dashboard"}>
                <Button><ArrowLeft /> Back</Button>
            </Link>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => generateAIContent(v)}
                    loading={isLoading}
                />
                <div className='col-span-2'>
                    <DisplayOutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateContentPage;