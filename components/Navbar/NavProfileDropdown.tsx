import Image from 'next/image';
import Link from 'next/link';

export const NavProfileDropdown = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-5 w-[300px] mt-4">
            <div className="flex space-x-3">
                <div>
                    <div className="relative w-12 h-14 block">
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
                        />
                    </div>
                </div>

                <div className="">
                    <h4 className="block font-medium">John Doe</h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                        Competitive Programmer | Full Stack Developer | Laravel
                        | React Js | Penetration Tester | Cyber security
                        Specialist , Helping You to secure your Web Applicatoin
                    </p>
                </div>
            </div>

            <ul className="py-3">
                <DropLink href="/" name="Profile" />
                <DropLink href="/" name="Settings & Privacy" />
                <DropLink href="/" name="Language" />
                <DropLink href="/" name="Help" />
            </ul>

            <hr />
            <ul className="py-3">
                <DropLink href="/" name="Posts & Activitys" />
                <DropLink href="/" name="Job Posting Account" />
            </ul>

            <hr />
            <ul className="pt-3">
                <DropLink
                    href="/"
                    name="Logout"
                    className="text-center bg-red-50 text-red-500 hover:bg-red-500 hover:text-red-50 transition-colors duration-300"
                />
            </ul>
        </div>
    );
};

const DropLink = ({ href, name, className = '' }: any) => {
    return (
        <li className="mb-1">
            <Link
                href={href}
                className={`block text-sm font-medium text-gray-600 py-1.5 hover:text-primary ${className}`}
            >
                {name}
            </Link>
        </li>
    );
};
