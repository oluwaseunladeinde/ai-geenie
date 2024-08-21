"use client";

import { TEMPLATE } from '@/app/(data)/templates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'


type TemplateProps = {
    selectedTemplate?: TEMPLATE;
    userFormInput: any;
    loading?: boolean;
}

export const FormSection = ({ selectedTemplate, userFormInput, loading }: TemplateProps) => {

    const [formData, setFormData] = useState<any>();

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    }

    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            <Image src={selectedTemplate?.icon!} alt={selectedTemplate?.name!} width={70} height={70} />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((field, index) => (
                    <div key={index}>
                        <div className='my-2 flex flex-col gap-2 mb-7'>
                            <label className='font-bold '>{field.label}</label>
                            {field.field === 'input' ?
                                <Input name={field.name} required={field?.required} onChange={handleInputChange} />
                                : field.field === 'textarea' ?
                                    <Textarea name={field.name} required={field?.required} onChange={handleInputChange} /> : null
                            }
                        </div>
                    </div>
                ))}
                <Button
                    type='submit'
                    className='w-full py-6'
                    disabled={loading}
                >
                    {loading && <Loader2 className='size-4 mr-2 animate-spin' />}
                    Generate Content
                </Button>
            </form>
        </div>
    )
};