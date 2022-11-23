import Layer from '../components/Layer';
import MyNetworkPageSidebar from '../components/Sidebar/MyNetworkPageSidebar';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const UserCard = dynamic(() => import('../components/Card/UserCard'), {
    ssr: false,
});

import { fakeUsers } from '../data/fake';

const mynetwork = () => {
    return (
        <Layer>
            <div className="container p-4 md:p-8">
                <div className="flex relative sm:space-x-6">
                    <div>
                        <MyNetworkPageSidebar />
                    </div>
                    {/* right content */}
                    <div>
                        <div className="grid grid-cols-12 gap-3 md:gap-6">
                            {fakeUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className="col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 xl:col-span-3"
                                >
                                    <UserCard user={user} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layer>
    );
};

export default mynetwork;
