"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { navLinks } from '@/constants';

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className='header'>
        <Link href='/' className='flex items-center gap-2 md:py-2'>
            <Image  src='/assets/images/logo.jpg' alt='logo' width={160} height={30} />
        </Link>

        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton  afterSignOutUrl='/' />
            <Sheet>
                <SheetTrigger>
                    <Image src='/assets/icons/menu.svg' alt='menu' width={32} height={32} className='cursor-pointer' />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                    <>
                    <Image  src='/assets/images/logo.jpg'  alt='logo' width={152} height={23} />

                    <ul className='mt-16 flex flex-col items-start gap-5'>
                        {navLinks.map((link)=> {
                            const isActive = link.route === pathname
                            
                            return (
                            
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                    <Link className='sidebar-link' href={link.route}>
                                        <Image src={link.icon} alt='logo' width={24} height={24} className={`${isActive && 'brightness-200'}`} />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
                </SheetContent>
            </Sheet>
            </SignedIn>

            <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href={`/sign-in`}>Login</Link>
                    </Button>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav