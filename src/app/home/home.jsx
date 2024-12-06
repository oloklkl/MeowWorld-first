import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';
import Hero from './hero';
import Bento from './bento';

const Home = () => {
    return (
        <>
            <IntroSwiper />
            <Hero />
            <Bento />
            <News mockNews={mockNews} title='뉴스' />
        </>
    );
};

export default Home;
