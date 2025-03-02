import React from 'react';
import MainLeft from '../home/left/MainLeft';
import MainRight from '../home/right/MainRight';
import '../../styles/Home.css';

const Home = () => {
    return (
        <div className="container-fluid scrollable-container">
            <div className="row">
                <div className="col-md-6">
                    <MainLeft />
                </div>
                <div className="col-md-6">
                    <MainRight />
                </div>
            </div>
        </div>
    );
};

export default Home;