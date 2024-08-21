import { Search } from 'lucide-react';
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
    return (
        <div className='p-5 shadow-md border-b-2 flex justify-between'>
            <div className='flex gap-2 items-center border p-2 rounded-md max-w-lg justify-center'>
                <Search />
                <input type='text' placeholder='Search...' className='outline-none' />
            </div>
            <div className='flex items-center'>
                <h2 className='bg-primary p-1 rounded-full px-2 text-sm text-white'>Join Membership just for $9.99/Month</h2>
            </div>
        </div>
    )
};