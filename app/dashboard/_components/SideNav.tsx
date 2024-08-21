import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import React from 'react'

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

    ]

    return (
        <div className='h-screen p-5 shadow-sm border'>
            <div className='flex justify-center'>
                <Image src="/logo.svg" alt="App logo" height={28} width={28} />
            </div>

            <div className='mt-10'>
                {menuList.map((menu) => (
                    <div className='flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer'>
                        <menu.icon />
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>

    )
};