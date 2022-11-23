import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { NavLink } from '../Navbar/NavLink';
import { navLinks, TNavLink } from '../Navbar/navLinks';

const BottomBar = () => {
    return (
        <div className="fixed h-16 flex sm:hidden items-center  z-50 bg-white/90 bottom-0 left-0 w-full">
            <ul className="flex w-full items-center justify-between px-3">
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
        </div>
    );
};
export default BottomBar;
