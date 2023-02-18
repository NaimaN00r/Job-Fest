import React from 'react';
import Header from '../../Header/Header';
import Companies from '../Companies/Companies';
import ExperiencedJob from '../ExperiencedJob/ExperiencedJob';
import FresherJob from '../FresherJob/FresherJob';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FresherJob></FresherJob>
            <ExperiencedJob></ExperiencedJob>
            <Companies></Companies>
        </div>
    );
};

export default Home;