import Image from 'next/image';
import { BsBookmark } from 'react-icons/bs';
import { IoDiamondOutline } from 'react-icons/io5';

export const ProfileSummary = () => {
    return (
        <div className="flex flex-col bg-white rounded-lg overflow-hidden drop-shadow-sm mb-10 sm:mb-0">
            <div className="h-24 w-full relative bg-primary">
                <Image
                    src="/banner.jpg"
                    alt="Profile Picture"
                    fill
                    sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 768px) 50vw,
                            (max-width: 1024px) 33.3vw,
                            25vw
                        "
                    className=""
                />
            </div>
            <div className="flex items-center relative">
                <div className="block w-16 h-16 rounded-full bg-gray-200 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 border-4 border-white overflow-hidden">
                    {/* profile image here... */}
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
                        className=""
                    />
                </div>
            </div>
            <div className="pt-10 pb-8 text-center">
                <p className="text-lg font-semibold text-slate-900">John Doe</p>
                <p className="text-xs text-slate-500">Frontend Developer</p>

                <ul className="flex items-center justify-center pt-3">
                    <li className="px-2 py-2 text-xs text-slate-500 text-center whitespace-nowrap">
                        <span className="block text-base font-semibold text-slate-900">
                            54
                        </span>
                        Connections
                    </li>
                    <li className="px-2 py-2 text-xs text-slate-500 text-center whitespace-nowrap mx-4">
                        <span className="block text-base font-semibold text-slate-900">
                            54
                        </span>
                        Profile Views
                    </li>
                </ul>
            </div>

            <div className="flex items-center">
                <button className="w-full py-3 text-xs xl:text-sm font-medium text-slate-900 border-t border-r border-slate-200 hover:bg-gray-50">
                    <span className="flex items-center justify-center text-primary">
                        <BsBookmark />
                        <span className="ml-2">Bookmarks</span>
                    </span>
                </button>

                <button className="w-full py-3 text-xs xl:text-sm font-medium text-slate-900 border-t border-slate-200 hover:bg-gray-50">
                    <span className="flex items-center justify-center text-purple-500">
                        <IoDiamondOutline className="" />
                        <span className="ml-2">Premium</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProfileSummary;
