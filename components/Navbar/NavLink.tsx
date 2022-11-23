import Link from 'next/link';

import { TNavLink } from './navLinks';

export const NavLink = ({ name, path = '/', Icon }: TNavLink) => {
    return (
        <li className="inline mx-3 md:mx-1 lg:mx-2">
            <Link
                href={path}
                className="flex items-center px-1 text-slate-500 hover:text-slate-800 space-x-2 text-2xl md:text-base select-none"
            >
                <Icon />
                <span className="hidden md:inline-block text-sm whitespace-nowrap">
                    {name}
                </span>
            </Link>
        </li>
    );
};
