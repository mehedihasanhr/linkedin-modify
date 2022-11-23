import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLink } from 'react-icons/bi';

const UserCard = ({ user }: any) => {
    return (
        <div className="block bg-white drop-shadow w-full  md:min-w-[200px] rounded-md overflow-hidden">
            <div className="w-full h-14 md:h-20 bg-slate-100">
                <div className="relative min-w-full max-w-full min-h-full max-h-full h-full">
                    <Image
                        src={user?.banner}
                        alt=""
                        fill
                        sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 768px) 50vw,
                            25vw
                        "
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONDPQAJHQNcR1H4ngAAAABJRU5ErkJggg=="
                    />
                </div>
            </div>
            <div className="flex flex-col relative">
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 md:w-24 md:h-24 relative rounded-full overflow-hidden">
                        <Image
                            src={user?.image}
                            alt=""
                            fill
                            sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 768px) 50vw,
                            25vw
                        "
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONDPQAJHQNcR1H4ngAAAABJRU5ErkJggg=="
                            className="rounded-full"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center text-center w-full px-2 md:px-6 pt-8 md:pt-16 mb-3 md:mb-5">
                        <React.Fragment>
                            <Link
                                href="/"
                                className="text-base font-medium line-clamp-1 mb-1 md:mb-2 hover:underline"
                            >
                                {user?.name}
                            </Link>
                            <p className="text-xs text-gray-500 line-clamp-2">
                                {user?.bio}
                            </p>
                            <p className="text-[10px] md:text-xs mt-2 md:mt-3 flex items-center space-x-1 text-gray-400">
                                <BiLink className="text-lg" />
                                <span className="">1 mutual connection</span>
                            </p>
                        </React.Fragment>
                    </div>
                </div>
                {/* <Link
                    href="/"
                    className="w-fit px-3 mx-auto mb-2 bg-primary/10 py-1 md:py-1 rounded-sm text-center block text-xs md:text-xs text-primary hover:bg-gray-100"
                >
                    Connect
                </Link> */}

                <div>
                    <Link
                        href="/"
                        className="w-full py-1 md:py-2 text-center block border-t border-slate-100 font-medium text-xs text-primary hover:bg-slate-50"
                    >
                        Connect
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
