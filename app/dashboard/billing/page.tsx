import { HeaderTitle } from '@/components/HeaderTitle';

type Props = {}

const BillingsPage = (props: Props) => {
    return (
        <div className='p-10 gap-y-4 h-screen'>
            <div className='flex flex-col p-5 bg-white border drop-shadow-sm'>
                <HeaderTitle title="Billings" subtitle='Search your previosly generated AI Content' />
            </div>

        </div>
    )
}

export default BillingsPage;