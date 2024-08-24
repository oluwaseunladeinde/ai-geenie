"use client";

import { usePathname, useRouter } from 'next/navigation';

import Image from 'next/image';
import { FileClock, Home, Loader2, Settings, WalletCards } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import UsageTrack from './UsageTrack';
import { useGetAiOutputs } from '@/features/api/use-get-aioutputs';


type Props = {}

const menuList = [
    {
        name: "Home",
        icon: Home,
        path: "/dashboard"
    },
    {
        name: "History",
        icon: FileClock,
        path: "/dashboard/history"
    },
    {
        name: "Billing",
        icon: WalletCards,
        path: "/dashboard/billing"
    },
    {
        name: "Settings",
        icon: Settings,
        path: "/dashboard/setting"
    },

];


export const SideNav = (props: Props) => {

    const path = usePathname();
    const { data, isLoading } = useGetAiOutputs();

    return (
        <div className='h-screen p-5 relative shadow-sm border bg-white'>
            <div className='flex pb-4 items-center border-b-1'>
                <Image src="/logo.svg" alt="App logo" height={30} width={30} />
                <h2 className='font-bold ml-1.5 text-2xl text-primary'>AI GEENIE</h2>
            </div>

            <div className='mt-8'>
                {menuList.map((menu) => (
                    <Link key={menu.name} href={menu.path} className={cn(
                        'flex gap-2 mb-2 p-3 hover:bg-primary/30 hover:text-primary rounded-lg cursor-pointer',
                        path === menu.path && "bg-primary hover:bg-primary hove text-white hover:text-white"
                    )}>
                        <menu.icon className='size-7' />
                        <h2 className='text-lg'>{menu.name}</h2>

                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                {isLoading
                    ?
                    <div className='m-5'>
                        <div className='border items-center justify-center flex text-primary rounded-lg p-3'>
                            <Loader2 className='size-4 animate-spin mr-2' />
                            <p>Loading...</p>
                        </div>
                    </div>
                    : <UsageTrack data={data} />}

            </div>
        </div>
    );
};