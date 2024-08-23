import { HeaderTitle } from '@/components/HeaderTitle';
import React from 'react'

type Props = {}

const SettingsPage = (props: Props) => {
    return (
        <div className='p-10 gap-y-4 h-screen'>
            <div className='flex flex-col gap-2 p-5 bg-white border drop-shadow-sm'>
                <HeaderTitle title="Settings" subtitle='Search your previosly generated AI Content' />
            </div>

        </div>
    )
}

export default SettingsPage;