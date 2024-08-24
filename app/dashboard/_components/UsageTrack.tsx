"use client";

import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { Button } from '@/components/ui/button';
import { db } from '@/db/drizzle';
import { aiOutput } from '@/db/schema';
import { useGetAiOutputs } from '@/features/api/use-get-aioutputs';
import { cn } from '@/lib/utils';
import { CREDIT_COUNT } from '@/utils/constants';
import { useUser } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'

type Props = {
    data?: {
        output: string;
        date: string;
        slug: string;
    }[];
}

const UsageTrack = ({ data = [] }: Props) => {

    let total = 0;

    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const [percentageFilled, setPercentageFilled] = useState<number>(0);
    const [isFilled, setIsFilled] = useState<boolean>(false);

    useEffect(() => {
        data.forEach((item: any) => {
            total += Number(item.output?.length)
        });

        setTotalUsage(total);

        console.log({ totalUsage, CREDIT_COUNT });

        if (total >= CREDIT_COUNT) {
            setIsFilled(true);
            setPercentageFilled(100);
        } else if (total < CREDIT_COUNT) {
            setIsFilled(false);
            setPercentageFilled(((total / CREDIT_COUNT) * 100));
        }


    }, [data]);

    function formatNumber(number: number): string {
        return number.toLocaleString('en-US');
    }

    return (
        <div className='m-5'>
            <div className={cn(
                'bg-primary text-white rounded-lg p-3',
                totalUsage >= CREDIT_COUNT && 'bg-rose-400 '

            )}>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div
                        className='h-2 bg-white rounded-full'
                        style={{
                            width: `${percentageFilled}%`,
                        }}
                    />
                </div>
                <h2 className='my-1 text-xs'>{formatNumber(totalUsage)} of {formatNumber(CREDIT_COUNT)} Credits Used</h2>
            </div>
            <Button variant={"secondary"} className='my-3 w-full text-primary hover:bg-primary hover:text-white'>Upgrade</Button>
        </div>
    )
}

export default UsageTrack;