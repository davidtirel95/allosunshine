
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Burger } from '@mantine/core';
import logo from '../assets/allosunshine_logo.png'

const Navbar = () => {

    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation'; 

    return ( 
        <header>
        
        <nav
        className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <Link className='' href="/"> 
            <Image 
            width={100}
            height={100}
            src={logo} 
            alt='allosunshine logo'
            className='p-1 h-20 bg-white border rounded sm hover:cursor-pointer'
            />
            </Link>
            <ul className='hidden md:flex'>
           <li className='p-4' >
               <Link className='nav-link' href="/"><a>about</a></Link>
            </li >
           <li className='p-4'>
               <Link className='nav-link' href="/news"><a>news</a></Link>
            </li >
           <li className='p-4'>
               <Link className='nav-link' href="/jpeg"><a>jpeg</a></Link>
            </li >
           <li className='p-4'>
               <Link className='nav-link' href="/join"><a>join</a></Link>
            </li >
           <li className='p-4'>
               <Link className='nav-link' href="/contact"><a>contact</a></Link>
            </li >
           </ul>

        {/* MOBILE MENU */}
        <Burger
        className='block md:hidden'
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        />
        <div className={opened ? 'fixed left-0 top-0 w-[60%] h-full border-l border-l-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='pt-24 p-4 block md:hidden'>
            <li className='p-4' ><Link className='nav-link p-4 border-b border-gray-600' href="/"><a>about</a></Link></li >
           <li className='p-4'><Link className='nav-link p-4 border-b border-gray-600' href="/news"><a>news</a></Link></li >
           <li className='p-4'><Link className='nav-link p-4 border-b border-gray-600' href="/jpeg"><a>jpeg</a></Link></li >
           <li className='p-4'><Link className='nav-link p-4 border-b border-gray-600' href="/join"><a>join</a></Link></li >
           <li className='p-4'><Link className='nav-link p-4 border-b border-gray-600' href="/contact"><a>contact</a></Link></li >
            </ul>
        </div>
        </nav>
        </header>
     );
}
 
export default Navbar;