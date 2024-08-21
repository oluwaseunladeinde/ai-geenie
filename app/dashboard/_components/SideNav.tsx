"use client";

import { usePathname } from 'next/navigation';

import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';


type Props = {}

export const SideNav = (props: Props) => {
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

    const path = usePathname();
    useEffect(() => {
        console.log({ path });
    }, [])

    return (
        <div className='h-screen p-5 shadow-sm border'>
            <div className='flex pb-4 items-center border-b-1'>
                <Image src="/logo.svg" alt="App logo" height={30} width={30} />
                <p className='font-bold ml-1.5 text-2xl text-primary'>AI GEENIE</p>
            </div>

            <div className='mt-8'>
                {menuList.map((menu) => (
                    <div key={menu.name} className={cn(
                        'flex gap-2 mb-2 p-3 hover:bg-primary/30 hover:text-primary rounded-lg cursor-pointer',
                        path === menu.path && "bg-primary hover:bg-primary hove text-white hover:text-white"
                    )}>
                        <menu.icon className='size-7' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>

    )
};