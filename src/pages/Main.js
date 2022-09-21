import React from 'react';
import MainVisual from './MainVisual';
import MainContent from './MainContent';
import Customer from './Customer';

const Main = ({ user }) => {
    return (
        <main className='Main'>
            <MainVisual />
            <MainContent user={user} />
            <Customer />
        </main>
    )
}

export default Main