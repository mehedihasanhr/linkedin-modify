import Image from 'next/image';
import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BiCommentDetail, BiLink } from 'react-icons/bi';
import { AiOutlineShareAlt } from 'react-icons/ai';
import Dropdown from '../Dropdown';
import Link from 'next/link';
import { options } from './options';

const Post = () => {
    const [refElement, setRefElement] = React.useState<any>(null);

    return (
        <div className="p-8 md:p-10 pb-4 bg-white drop-shadow-sm mt-8 rounded-md">
            <div className="w-full flex items-center  space-x-4">
                <div>
                    <div className="relative w-10 h-10">
                        <Image
                            src="/face.jpg"
                            alt="/face.jpg"
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
                </div>

                <div className="w-full">
                    <p className="font-semibold">Frontend Designer</p>
                    <p className="text-xs text-gray-400">54 Followers</p>
                </div>

                <div>
                    <button
                        aria-describedby="dropdown"
                        className=" text-gray-400 p-2 rounded-md"
                        ref={setRefElement}
                    >
                        <BiDotsHorizontalRounded />
                    </button>

                    <Dropdown refElement={refElement}>
                        <div className="bg-white drop-shadow-md p-2 rounded-md">
                            <ul>
                                {options.map(({ title, path, Icon }, index) => (
                                    <li key={index} className="mb-1">
                                        <Link
                                            href={path}
                                            className="flex items-center space-x-4 text-sm py-2 px-3 w-full hover:bg-gray-100 transition-all duration-300 rounded-md"
                                        >
                                            <Icon className="text-base" />
                                            <span>{title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Dropdown>
                </div>
            </div>

            <div className="">
                <p className="text-gray-600 text-sm mt-4">
                    If You want to make a bold statement with your design work,
                    look no further. {`We've`} rounded up the best free fonts
                    for designers.
                </p>
                <div
                    className="relative w-full h-full mt-4 rounded-md overflow-hidden"
                    style={{ maxWidth: '100%' }}
                >
                    <Image
                        src="/post.jpg"
                        alt="/face.jpg"
                        width={700}
                        height={500}
                        sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 768px) 50vw,
                            (max-width: 1024px) 33.3vw,
                            25vw
                        "
                        className="rounded-md"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </div>

            <div className="py-3">
                <div className="flex items-center justify-end text-xs space-x-3 text-gray-500">
                    <div className="flex items-center space-x-1">
                        <AiOutlineLike className="text-sm text-gray-400" />
                        <span>323</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <BiCommentDetail className="text-sm text-gray-400" />
                        <span>323</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <AiOutlineShareAlt className="text-sm text-gray-400" />
                        <span>323</span>
                    </div>
                </div>
            </div>

            {/* buttons groups */}
            <div>
                <div className="flex items-center justify-between border-t pt-2">
                    <div className="flex items-center w-full">
                        <button className="w-full text-gray-400 hover:text-gray-500 justify-center text-sm p-2 flex items-center space-x-1 hover:bg-slate-50">
                            <AiOutlineLike className="text-lg" />
                            <span>Like</span>
                        </button>

                        <button className="w-full text-gray-400 hover:text-gray-500 justify-center text-sm p-2 flex items-center space-x-1 hover:bg-slate-50">
                            <BiCommentDetail className="text-lg" />
                            <span>Comments</span>
                        </button>

                        <button className="w-full text-gray-400 hover:text-gray-500 justify-center text-sm p-2 flex items-center space-x-1 hover:bg-slate-50">
                            <AiOutlineShareAlt className="text-lg" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
