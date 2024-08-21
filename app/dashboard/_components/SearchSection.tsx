import React from 'react';
import { Search } from 'lucide-react';

type Props = {
    onSearchInput: () => void;
}

export const SearchSection = ({ onSearchInput }: any) => {
    return (
        <div className='flex flex-col items-center justify-center p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 text-white'>
            <h2 className='text-3xl font-bold'>Browse all templates</h2>
            <p>What would you like to create today?</p>
            <div className='flex w-full justify-center'>
                <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]'>
                    <Search className='text-primary' />
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent w-full outline-none text-muted-foreground'
                        onChange={(event) => {
                            onSearchInput(event.target.value)
                        }}
                    />
                </div>
            </div>
        </div>
    )
};