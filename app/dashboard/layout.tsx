import React, { ReactNode } from 'react'
import { SideNav } from './_components/SideNav';
import { Header } from './_components/Header';

type Props = {}

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='bg-slate-100 h-screen'>
            <div className='hidden md:w-64 md:block fixed'>
                <SideNav />
            </div>
            <div className='md:ml-64'>
                <Header />
                {children}
            </div>

        </div>
    )
}

export default DashboardLayout;