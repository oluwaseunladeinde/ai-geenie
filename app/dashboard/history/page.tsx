"use client";

import { TEMPLATELIST } from '@/app/(data)/templates';
import { HeaderTitle } from '@/components/HeaderTitle'
import { Button } from '@/components/ui/button';
import { useGetAiOutputs } from '@/features/api/use-get-aioutputs';
import { cn, countWords } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

type Props = {}

const historyTableHeader = [
    {
        name: "template",
        label: "Template",
    },
    {
        name: "output",
        label: "AI Resp",
    },
    {
        name: "date",
        label: "Date",
    },
    {
        name: "words",
        label: "Word Count",
    },
    {
        name: "copy",
        label: "Copy",
    }
];

const RowTemplate = ({ slug }: { slug: string }) => {
    const template = TEMPLATELIST?.find((template) => template.slug === slug);
    return (
        <div className='flex gap-3'>
            <Image src={template?.icon!} alt={template?.name!} width={24} height={24} />
            <p className='text-sm text-gray-500 capitalize'>{template?.name}</p>
        </div>
    )
}

const RowSnippet = ({ output }: { output: string }) => {
    console.log({ output });
    return (
        <p className='text-sm wordwrap line-clamp-3'>{output}</p>
    )
}


const HistoryPage = (props: Props) => {

    const { data, isLoading } = useGetAiOutputs();
    let newdata = [];
    if (!isLoading) {
        newdata = data.map((row: any) => ({
            ...row,
            words: countWords(row.output),
            output: <RowSnippet output={row.output} />,
            template: <RowTemplate slug={row.slug} />,
            copy: <Button onClick={() => navigator.clipboard.writeText(row.output)} variant={"outline"}>Copy</Button>,
        }));
    }

    return (
        <div className='p-10 gap-y-4 h-screen'>
            <div className='flex flex-col p-10 gap-1.5 bg-white border drop-shadow-sm'>
                <HeaderTitle title="History" subtitle='Search your previosly generated AI Content' />
                <div className='py-5'>
                    <div className='bg-slate-100 px-3 py-2 flex gap-2'>
                        {historyTableHeader.map((header, index) => (
                            <div key={index} className='flex items-center justify-start font-bold uppercase w-full'>
                                {header.label}
                            </div>
                        ))}
                    </div>
                    {isLoading ?
                        <div className='flex p-10 w-full items-center justify-center mx-auto border'>
                            <Loader2 className="animate-spin size-4 mr-2" />
                            <p>Loading...</p>
                        </div>
                        :
                        <>
                            {newdata.map((data: any, index: number) => (
                                <div className='px-3 py-5 flex gap-2 border'>
                                    {historyTableHeader.map((header, aindex) => (
                                        <div key={aindex} className={cn(
                                            'text-sm font-normal text-muted-foreground w-full',
                                            header.name === 'template' && 'col-span-2',
                                            header.name === 'output' && 'col-span-3',
                                        )}>
                                            {data[header.name]}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </>



                        // <div className='bg-slate-50 p-2 flex gap-2'>
                        //     {newdata.map((data: any, index: number) => (
                        //         <div key={index} className='flex font-bold capitalize w-full p-2'>
                        //             {historyTableHeader.map((header, aindex) => (
                        //                 <div key={aindex} className={cn(
                        //                     'text-sm font-normal text-muted-foreground',
                        //                     // header.name === 'template' && 'col-span-2',
                        //                     // header.name === 'output' && 'col-span-3',
                        //                 )}>
                        //                     {data[header.name]}
                        //                 </div>
                        //             ))}
                        //         </div>
                        //     ))}
                        // </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HistoryPage