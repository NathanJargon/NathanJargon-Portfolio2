import React from 'react';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import '../../../styles/MainRight.css';

const MainRight = () => {
    return (
        <div className="container-fluid text-white main-right-container">
            <div className="row">
                <div className="p-3">
                    <Top />
                    <Middle />
                    <Bottom />
                </div>
            </div>
        </div>
    );
};

export default MainRight;