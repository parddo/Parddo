import React from 'react';
import '../assets/styles/app.scss'
import AnimationT from './complements/AnimationT';
import Navar from './complements/Navar';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Cover from './sections/Cover';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import MySkills from './sections/MySkills';
import Profile from './sections/Profile';



const HelloWorld= () => (
    <div className="contend-main ">
    <div>
        <Profile  imgProfile="https://pbs.twimg.com/profile_images/1360406369023754242/yQ_74jnq_400x400.jpg" />
    </div>
    <div className="main">
        
        <Navar />
        <Cover  imgProfile="https://pbs.twimg.com/profile_images/1360406369023754242/yQ_74jnq_400x400.jpg"/>
        <AnimationT />
        <AboutMe />
        <MySkills />  
        <Education />
        <Experience />
        <Contact />
        <Footer />
    </div>

</div>
    
);


export default HelloWorld;