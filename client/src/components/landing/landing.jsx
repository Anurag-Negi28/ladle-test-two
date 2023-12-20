import React from 'react'
import Card from './components/card';

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer';
import './landing.css'

function Landing() {
    return (
        <>
            <Navbar />
            <div className='main-landing'>
                <div className="landing">
                Ladle Tracking System
                    <hr />
                </div>
                <div id='cardlist'>
                    <Card title='Ladle Health' content='98%'
                        link='/chapters' />
                    <Card title='TLC Pit Area' content='Ladle 3 reached' />
                    <Card title='Converter' content='Ladle 4 reached' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing;