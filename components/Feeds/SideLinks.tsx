import Link from 'next/link';
import React from 'react';

const SideLinks = () => {
    return (
        <div className="hidden sm:flex flex-col bg-white rounded-lg overflow-hidden drop-shadow-sm mt-10">
            <div className="p-8">
                <div className="text-sm font-medium pb-3">Discover</div>
                <ul>
                    <li className="py-1">
                        <Link
                            href="/"
                            className="block p-1.5 text-sm hover:bg-slate-50"
                        >
                            Groups
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link
                            href="/"
                            className="block p-1.5 text-sm hover:bg-slate-50"
                        >
                            Events
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link
                            href="/"
                            className="block p-1.5 text-sm hover:bg-slate-50"
                        >
                            Pages
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link
                            href="/"
                            className="block p-1.5 text-sm hover:bg-slate-50"
                        >
                            Newsletters
                        </Link>
                    </li>
                </ul>
            </div>
            <Link
                href="/"
                className="flex items-center justify-between w-full px-8 py-3 text-sm border-t border-slate-100 hover:bg-slate-50"
            >
                <span>Explore more</span>
                {/* arrow right */}
                <svg
                    className="w-4 h-4 ml-2 inline-block -rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default SideLinks;
