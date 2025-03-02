import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import '../../../styles/MainLeft.css';
import image1 from '../../../assets/left1.jpg';

const MainLeft = () => {
    return (
        <div className="container-fluid text-white main-left-container">
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

export default MainLeft;