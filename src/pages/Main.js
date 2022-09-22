import React from 'react';
import MainVisual from './MainVisual';
import MainContent from './MainContent';
import Customer from './Customer';
import '../css/Main.scss';

const Main = ({ content }) => {

    return (
        <main className='Main'>
            <MainVisual word={content} />
            <MainContent word={content} />
            <Customer />
        </main>
    )
}

export default Main