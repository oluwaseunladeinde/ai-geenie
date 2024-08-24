"use client";
import React, { ReactNode, useState } from 'react'
import { SideNav } from './_components/SideNav';
import { Header } from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

type Props = {}

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const [totalUsage, setTotalUsage] = useState<Number>(0);

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <div className='bg-slate-100 h-full'>
                <div className='hidden md:w-64 md:block fixed'>
                    <SideNav />
                </div>
                <div className='md:ml-64'>
                    <Header />
                    {children}
                </div>

            </div>
        </TotalUsageContext.Provider>
    )
}

export default DashboardLayout;