"use client";

import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { FormSection } from '../_components/FormSection';
import { DisplayOutputSection } from '../_components/DisplayOutputSection';
import { TEMPLATE, TEMPLATELIST } from '@/app/(data)/templates';
import Link from 'next/link';


interface TemplateProps {
    params: {
        slug: string;
    }
};

const CreateContentPage = (props: TemplateProps) => {

    const slug = props.params.slug;
    const selectedTemplate: TEMPLATE | undefined = TEMPLATELIST?.find((template) => template.slug === slug);

    const generateAIContent = (formData: any) => {

    }

    return (
        <div className='p-10 gap-y-4'>
            <Link href={"/dashboard"}>
                <Button><ArrowLeft /> Back</Button>
            </Link>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => generateAIContent(v)}
                />
                <div className='col-span-2'>
                    <DisplayOutputSection />
                </div>
            </div>
        </div>
    )
}

export default CreateContentPage;