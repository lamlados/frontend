import React from 'react';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className='fixed w-5/6 justify-center top-0 z-50'
        >
            <div className='w-fulljustify-center shadow-md'>
                <div className='flex items-center justify-between'>
                    <Link href='https://www.google.com'>
                        <div className='flex items-center'>Logo</div>
                    </Link>
                    <Link href='https://www.google.com'>
                        <div className='flex items-center'>Logo2</div>
                    </Link>
                </div>
                <div className='flex items-center justify-between'>
                    <Link href='https://www.google.com'>
                        <div className='flex items-center'>Home</div>
                    </Link>
                </div>
            </div>
        </header>
    );
};