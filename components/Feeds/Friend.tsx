import Link from 'next/link';

export const Friend = ({
    name,
    subTitle,
}: {
    name: string;
    subTitle: string;
}) => {
    return (
        <div className="flex space-x-3 xl:space-x-4">
            <div className="mt-0.5">
                <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-gray-100"></div>
            </div>
            <div>
                <Link
                    href="/"
                    className="text-[13px] xl:text-sm font-semibold text-gray-500 hover:underline"
                >
                    {name}
                </Link>
                <p className="text-[11px] xl:text-xs text-gray-400 line-clamp-2">
                    {subTitle}
                </p>
                <Link
                    href="/"
                    className="text-[11px] xl:text-xs py-1 px-2 mt-2 block font-medium bg-slate-100 text-gray-600 w-fit hover:bg-slate-200"
                >
                    + Follow
                </Link>
            </div>
        </div>
    );
};
