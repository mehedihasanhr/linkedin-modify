import Link from 'next/link';
import { Friend } from './Friend';

const SuggestedConnections = () => {
    return (
        <div className="p-4 xl:p-8 pb-5 bg-white drop-shadow-sm rounded-md">
            <div className="flex items-center justify-between">
                <h6 className="text-sm font-semibold text-gray-500">
                    Suggested Connections
                </h6>
            </div>
            {/* friends... */}
            <div className="block mt-4 space-y-4">
                <Friend
                    name="Imam Hossain"
                    subTitle="UX Designer || Helping the world to create more user friendly, modern, and clean digital asset | Let's Connect"
                />

                <Friend
                    name="MD Khairul Hasan Sajid"
                    subTitle="Competitive Programmer | Full Stack Developer | Laravel | React Js | Penetration Tester | Cyber security Specialist , Helping You to secure your Web Applicatoin"
                />
            </div>

            <div className="pt-5 text-center">
                <Link
                    href="/jobs"
                    className="text-xs xl:text-sm text-gray-500 hover:text-primary"
                >
                    See all
                </Link>
            </div>
        </div>
    );
};

export default SuggestedConnections;
