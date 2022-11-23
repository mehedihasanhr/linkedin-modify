import Link from 'next/link';
import { JobItem } from './JobItem';

const JobsFeed = () => {
    return (
        <div className="p-4 xl:p-8 pb-5 bg-white drop-shadow-sm rounded-md">
            <h6 className="text-sm font-semibold text-gray-500">
                Jobs Picked for you
            </h6>
            <div className="mt-4 space-y-4">
                <JobItem
                    title="Frontend Developer"
                    company="CSM Bangladesh Ltd."
                    location="Mirpur, Dhaka, Bangladesh"
                    end="Ends in 2 days"
                />

                <JobItem
                    title="Javascript Developer"
                    company="MetaDesign Solutions-Bangladesh"
                    location="Dhaka, Bangladesh "
                    end="Ends 20th Dec, 2022"
                />

                <JobItem
                    title="Frontend Developer"
                    company="CSM Bangladesh Ltd."
                    location="Mirpur, Dhaka, Bangladesh"
                    end="Ends in 2 days"
                />
            </div>
            <div className="pt-3 text-center">
                <Link
                    href="/jobs"
                    className="text-xs xl:text-sm text-gray-500 hover:text-primary"
                >
                    See all jobs
                </Link>
            </div>
        </div>
    );
};

export default JobsFeed;
