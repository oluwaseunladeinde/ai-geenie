import { HeaderTitle } from '@/components/HeaderTitle';
import { formatNaira } from '@/lib/utils';
import { Check } from 'lucide-react';
import Head from 'next/head';

import styles from './pricing.module.css';
import { pricingPlans } from '@/utils/constants';
import { Button } from '@/components/ui/button';

type Props = {}

const BillingsPage = (props: Props) => {
    return (
        <div className='p-10 gap-y-4 h-screen'>
            <Head>
                <title>Pricing | AI Geenie</title>
                <meta name="description" content="Pricing and Subscription Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <div className='flex flex-col p-5'>
                <h1 className="text-3xl font-bold text-center mb-8">Upgrade With Monthly Plan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white items-center justify-center rounded-lg shadow-md p-6">
                        <p className="font-bold text-sm mb-2">FREE</p>
                        <h2 className="text-3xl font-bold mb-6">{formatNaira(0)} <span className='text-sm text-muted-foreground'>/month</span></h2>
                        <ul className="list-none space-y-2">
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />10,000 Words/Month</li>
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />50 Content Templates</li>
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />Limited Download & Copy</li>
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />1 Month of History</li>
                        </ul>
                        <div className="text-center mt-4">
                            <button className=" bg-primary w-full text-white font-bold py-2 px-4 rounded">
                                Upgrade
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="font-medium text-sm mb-2">PREMIUM </p>
                        <h2 className="text-3xl font-bold mb-6">{formatNaira(15736.75)} <span className='text-sm text-muted-foreground'>/month</span></h2>
                        <ul className="list-none space-y-2">
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />1,000,000 Words/Month</li>
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />100+ Template Access</li>
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />Unlimited Download & Copy</li>
                            <li className='flex gap-x-2'><Check className='size-4 text-primary' />1 Year of History</li>
                        </ul>
                        <div className="text-center mt-4">
                            <button className=" bg-primary w-full text-white font-bold py-2 px-4 rounded">
                                Upgrade
                            </button>
                        </div>
                    </div>

                </div>
            </div> */}

            <main className={styles.main}>
                <h1 className={styles.title}>Pricing</h1>
                <div className="flex mt-10 gap-6">
                    {pricingPlans.map((plan) => (
                        <div key={plan.title} className="bg-white p-10 relative w-full">
                            <h2 className={styles.pricingTitle}>{plan.title}</h2>
                            <div className={styles.pricingPrice}>
                                <span className={styles.pricingPriceValue}>${plan.price}</span>
                                <span className={styles.pricingPriceUnit}>/month</span>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                {plan.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <Button className="bg-primary w-full p-3 mt-10">{plan.buttonText}</Button>
                        </div>
                    ))}
                </div>
            </main>




        </div>
    )
}

export default BillingsPage;