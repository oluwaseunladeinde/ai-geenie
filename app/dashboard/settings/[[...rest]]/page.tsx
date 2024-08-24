import { HeaderTitle } from '@/components/HeaderTitle';
import { UserProfile } from '@clerk/nextjs';
import React from 'react'

type Props = {}

const SettingsPage = (props: Props) => {
    return (
        <div className='p-10 gap-y-4 h-screen'>
            <UserProfile />
        </div>
    )
}

export default SettingsPage;