import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Recommend from '../Recommends/Recommend';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Recommend></Recommend>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;