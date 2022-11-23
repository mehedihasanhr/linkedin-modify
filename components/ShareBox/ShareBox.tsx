import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCardImage } from 'react-icons/bs';
import { BiVideoRecording } from 'react-icons/bi';
import { RiCalendarEventLine } from 'react-icons/ri';

const ShareBox = () => {
    return (
        <div className="w-full drop-shadow-sm bg-white rounded-md overflow-hidden">
            <div className="px-10 py-4">
                <div className="flex items-center ">
                    <div>
                        <div className="w-12 h-12 border-4 border-white rounded-full relative">
                            <Image
                                src="/profile.jpeg"
                                alt=""
                                fill
                                sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 768px) 50vw,
                            25vw
                        "
                                className="rounded-full"
                            />
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder="Share your thoughts..."
                        className="p-3 w-full focus:outline-none ml-4"
                    />
                </div>
            </div>
            <div className="flex items-center overflow-hidden">
                <Link
                    href="/"
                    className="flex items-center justify-center w-full px-3 py-2.5 text-slate-500 border-r-2 border-t-2 border-gray-100 hover:bg-gray-50"
                >
                    <BsCardImage />
                    <span className="inline-block ml-3 text-xs sm:text-sm font-medium">
                        Photo
                    </span>
                </Link>

                <Link
                    href="/"
                    className="flex items-center justify-center w-full px-4 py-2.5 text-slate-500 border-r-2 border-t-2 border-gray-100 hover:bg-gray-50"
                >
                    <BiVideoRecording />
                    <span className="inline-block ml-3 text-xs sm:text-sm font-medium">
                        Video
                    </span>
                </Link>

                <Link
                    href="/"
                    className="flex items-center justify-center w-full px-4 py-2.5 text-slate-500 sm:border-r-2 border-t-2 border-gray-100 hover:bg-gray-50"
                >
                    <RiCalendarEventLine />
                    <span className="inline-block ml-3 text-xs sm:text-sm font-medium">
                        Event
                    </span>
                </Link>

                <Link
                    href="/"
                    className="hidden sm:flex items-center justify-center w-full px-4 py-2.5 text-slate-500 border-t-2 border-gray-100 hover:bg-gray-50"
                >
                    <RiCalendarEventLine />
                    <span className="inline-block ml-3 text-xs sm:text-sm font-medium whitespace-nowrap">
                        Write Article
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ShareBox;
