type Props = {
    title: string;
    subtitle?: string;
}

export const HeaderTitle = ({ title, subtitle }: Props) => {
    return (
        <>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p className='text-gray-500 line-clamp-3'>{subtitle}</p>
        </>
    )
};