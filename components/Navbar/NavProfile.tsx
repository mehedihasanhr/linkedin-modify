import Image from 'next/image';
import React from 'react';
import Dropdown from '../Dropdown';
import { NavProfileDropdown } from './NavProfileDropdown';

export const NavProfile = () => {
    const [refElement, setRefElement] = React.useState<any>(null);
    return (
        <div
            className="flex items-center flex-nowrap space-x-2 hover:cursor-pointer"
            ref={setRefElement}
        >
            <div className="relative overflow-hidden w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                <Image
                    src="/profile.jpeg"
                    alt="profile"
                    fill
                    sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 768px) 50vw,
                        (max-width: 1024px) 33.3vw,
                        25vw
                    "
                    className="rounded-full"
                />
            </div>
            <div className="hidden lg:flex items-center space-x-2">
                <span className="inline-block text-sm font-medium text-gray-600 whitespace-nowrap">
                    John Doe
                </span>
                <span className="text-xs text-gray-500">
                    {/* arrow */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>

            <Dropdown refElement={refElement}>
                <NavProfileDropdown />
            </Dropdown>
        </div>
    );
};
