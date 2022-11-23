import Link from 'next/link';
import { useRef } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from './NavLink';
import { navLinks, TNavLink } from './navLinks';
import { NavProfile } from './NavProfile';
import NavSearchBox from './NavSearchBox';
import { IoSearchOutline } from 'react-icons/io5';

export const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="sticky top-0 left-0 h-16 w-full bg-white/90 drop-shadow-sm flex items-center z-10 backdrop-filter backdrop-blur-sm"
            ref={navRef}
        >
            <div className="container w-full mx-auto flex items-center justify-between">
                <Link href="/">
                    <span className="block p-1 bg-primary w-fit text-3xl rounded-sm text-white">
                        <FaLinkedinIn />
                    </span>
                </Link>

                <NavSearchBox />

                <ul className="hidden sm:flex items-center">
                    {navLinks.map((link: TNavLink, index: number) => (
                        <NavLink key={index} {...link} />
                    ))}

                    {/* search */}
                    <li className="inline mx-2 lg:hidden">
                        <Link
                            href="/"
                            className="flex items-center px-1 text-slate-500 hover:text-slate-800 space-x-2 text-2xl md:text-base"
                        >
                            <IoSearchOutline />
                            <span className="hidden md:inline-block text-sm whitespace-nowrap">
                                Search
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="md:border-l md:ml-4 md:pl-4">
                    <NavProfile />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
