import React from 'react';
import { Contact } from '../contact/Contact';
import { Footer } from '../footer/Footer';
import { LandingPage } from '../landing/LandingPage';
import { Activity } from '../activities/Activity';
import './Intro.css'
export default function Intro(){

    return(
        <div className='home-section'>
           <LandingPage/>
           <Activity/>
            <Contact/>
            <Footer/>
        </div>
    )
}