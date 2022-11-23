import * as React from 'react';
import BottomBar from '../BottomBar';
import Navbar from '../Navbar';

type LayerProps = {
    children: React.ReactElement;
};

const Layer = ({ children, ...props }: LayerProps) => {
    return (
        <main>
            <main className="select-none">
                <Navbar />
                {children}
                <BottomBar />
            </main>
        </main>
    );
};

export default Layer;
