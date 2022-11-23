import { BsBookmarks, BsLink45Deg } from 'react-icons/bs';
import { IoIosEyeOff } from 'react-icons/io';
import { HiOutlineFlag } from 'react-icons/hi';
import { BiLink } from 'react-icons/bi';

export const options = [
    {
        title: 'Save',
        path: '/',
        Icon: BsBookmarks,
    },
    {
        title: 'Copy Link',
        path: '/',
        Icon: BiLink,
    },
    {
        title: `I don't want to see this`,
        path: '/',
        Icon: IoIosEyeOff,
    },
    {
        title: 'Report',
        path: '/',
        Icon: HiOutlineFlag,
    },
];
