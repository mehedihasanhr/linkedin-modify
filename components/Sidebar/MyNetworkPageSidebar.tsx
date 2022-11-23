import React from 'react';

import { TbUsers } from 'react-icons/tb';
import { TiContacts } from 'react-icons/ti';
import { MdOutlineTag } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { AiOutlineFilePpt } from 'react-icons/ai';
import { HiOutlineStatusOnline, HiUserGroup } from 'react-icons/hi';
import Link from 'next/link';

const MyNetworkPageSidebar = () => {
    return (
        <div className="hidden md:block w-[300px] sticky top-20 left-0">
            <div className="bg-white rounded-md drop-shadow p-8">
                <h5 className="text-sm font-medium">Manage my Network</h5>
                <ul className="space-y-2 mt-3">
                    <SideLink
                        href="/"
                        name="Connections"
                        Icon={TbUsers}
                        count={30}
                    />

                    <SideLink href="/" name="Contacts" Icon={TiContacts} />
                    <SideLink
                        href="/"
                        name="Following & Followers"
                        Icon={HiOutlineStatusOnline}
                    />

                    <SideLink href="/" name="Groups" Icon={HiUserGroup} />
                    <SideLink href="/" name="Events" Icon={BsCalendarDate} />
                    <SideLink
                        href="/"
                        name="Pages"
                        Icon={AiOutlineFilePpt}
                        count={5}
                    />
                    <SideLink
                        href="/"
                        name="Newsletters"
                        Icon={FaRegNewspaper}
                    />
                    <SideLink href="/" name="Hashtags" Icon={MdOutlineTag} />
                </ul>
            </div>
        </div>
    );
};

export default MyNetworkPageSidebar;

// link
const SideLink = ({ href, name, Icon, count }: any) => {
    return (
        <li className="flex items-center">
            <Link
                href={href}
                className="flex items-center text-sm w-full space-x-2 py-2 px-5 rounded-md text-gray-600 hover:bg-gray-100"
            >
                <span>
                    <Icon className="text-xl" />
                </span>
                <span className="whitespace-nowrap w-full">{name}</span>
                {count && (
                    <span className="text-xs font-medium p-0.5 rounded-full text-gray-500">
                        {count.toString()}
                    </span>
                )}
            </Link>
        </li>
    );
};
