import Link from 'next/link';

type TJob = {
    title: string;
    company: string;
    location: string;
    end: string;
};

export const JobItem = ({ title, company, location, end }: TJob) => {
    return (
        <div className="flex space-x-3 xl:space-x-4">
            <div className="mt-0.5">
                <div className="w-10 h-12 xl:w-12  xl:h-14 bg-gray-100"></div>
            </div>
            <div>
                <Link
                    href="/"
                    className="text-[13px] xl:text-sm font-semibold text-gray-500 hover:underline"
                >
                    {title}
                </Link>
                <p className=" text-[11px] xl:text-xs text-gray-400">
                    {company}
                </p>
                <p className=" text-[11px] xl:text-xs text-gray-400">
                    {location}
                </p>
                <p className="text-[11px] xl:text-xs text-gray-400">{end}</p>
            </div>
        </div>
    );
};
