"use client";

import React, { useEffect, useState } from 'react'
import { TemplateCard } from './TemplateCard';
import { TEMPLATE, TEMPLATELIST } from '@/app/(data)/templates';

const TemplateListSection = ({ userSearchInput }: { userSearchInput: string }) => {

    const [templateListResult, setTemplateListResult] = useState(TEMPLATELIST);
    useEffect(() => {
        if (userSearchInput) {
            const filteredData = TEMPLATELIST.filter((item) => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            setTemplateListResult(filteredData);
        } else {
            setTemplateListResult(TEMPLATELIST);
        }
    }, [userSearchInput])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {templateListResult.map((item: TEMPLATE, index: number) => (
                <TemplateCard key={item.slug} {...item} />
            ))}
        </div>
    )
}

export default TemplateListSection;