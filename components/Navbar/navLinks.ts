import { IoHomeOutline } from 'react-icons/io5';
import { BsBriefcase } from 'react-icons/bs';
import { TbMessages, TbUsers } from 'react-icons/tb';
import { BsBell } from 'react-icons/bs';

export const navLinks = [
    {
        name: 'Home',
        path: '/',
        Icon: IoHomeOutline,
    },
    {
        name: 'My Network',
        path: '/mynetwork',
        Icon: TbUsers,
    },
    {
        name: 'Jobs',
        path: '/',
        Icon: BsBriefcase,
    },
    {
        name: 'Messaging',
        path: '/',
        Icon: TbMessages,
    },
    {
        name: 'Notifications',
        path: '/',
        Icon: BsBell,
    },
];

export type TNavLink = typeof navLinks[0];
