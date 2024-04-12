import React from 'react'
import { Logo } from '../svgs'
import clsx from 'clsx'

const MENU_ITEMS = [
    "Find designer",
    "Inspiration",
    "Courses",
    "Jobs",
    "Go Pro",
]

export default function Header() {
    return (
        <nav className='px-10 py-8 flex justify-between items-center'>
            <ul className='text-sm font-semibold lg:flex space-x-4 hidden'>
                {MENU_ITEMS.map((item) => (
                    <li key={item}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
                <Logo className='w-24 h-auto logo' />
            <button className={clsx(
                'text-sm font-semibold text-white bg-customs-black',
                'px-6 py-4 rounded-full'
            )}>
                Sign Up
            </button>
        </nav>
    )
}
