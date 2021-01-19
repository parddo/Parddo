import React from 'react';
import '../assets/styles/app.scss'
import Navar from './complements/Navar';
import AboutMe from './sections/AboutMe';
import Cover from './sections/Cover';
import Education from './sections/Education';
import MySkills from './sections/MySkills';
import Profile from './sections/Profile';



const HelloWorld= () => (
    <div className="contend-main ">
    <div>
        <Profile  imgProfile="https://pbs.twimg.com/profile_images/1349920846282895368/IJaRmXZ3_400x400.jpg" />
    </div>
    <div className="main">
        <Navar />
        <Cover  imgProfile="https://pbs.twimg.com/profile_images/1349920846282895368/IJaRmXZ3_400x400.jpg"/>

        <AboutMe />
        <MySkills />
        <Education />
        
    </div>

</div>
    
);


export default HelloWorld;