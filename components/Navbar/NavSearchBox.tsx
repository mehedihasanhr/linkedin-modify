import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';

const NavSearchBox = () => {
    return (
        <div className="hidden lg:block mr-auto ml-4 xl:ml-6 w-full max-w-[200px]">
            <input
                type="text"
                placeholder="Search"
                className="w-full h-10 pl-4 bg-gray-100 placeholder:text-gray-400 placeholder:text-sm"
            />
        </div>
    );
};

export default NavSearchBox;
