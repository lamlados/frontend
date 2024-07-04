import React from 'react';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className='fixed w-full justify-center top-2 z-50'
        >
            <div className='w-5/6 items-center shadow-md'>
                <div className='flex items-center justify-between'>
                    <Link href='https://www.google.com'>
                        <div className='text-lg font-bold text-primary'>Logo</div>
                    </Link>
                    <Link href='https://www.google.com'>
                        <div className='text-lg font-bold text-primary'>Logo2</div>
                    </Link>
                </div>
                <div className='flex items-center justify-between'>
                    <Link href='https://www.google.com'>
                        <div className='text-lg font-bold text-primary'>Home</div>
                    </Link>
                </div>
            </div>
        </header>
    );
};