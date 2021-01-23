import React from 'react';
import ReactDom from 'react-dom';
import Card from '../complements/Card';
import SectionOne from '../complements/SectionOne';
import Tlites from '../complements/Tlites';

class Education extends React.Component {
    render(){
        return (
            <section className="container setc-main" id="Education">
                <SectionOne  icoClass="fas fa-user-graduate icon-section"  tlite="Education" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology and the variants that are based on it. 1 It was founded in 2014 by the Colombian engineer Freddy Vega and the Guatemalan computer scientist Christian Van Der Henst." />
                <div className="tlites">
                    <Card  url="https://images.pexels.com/photos/1422292/pexels-photo-1422292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" description="Este fue un curso donde aprendi a manejar sasss, este fue un exelete curso"  />
                </div>  
                    <Tlites  url="https://static.platzi.com/media/achievements/badge-react-2018-afc93257-48af-4e54-acaa-4d0433380f64.png" curse="React JS Course" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png" curse="Git and GitHub Professional Course" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png" curse="Asincronización con JavaScript" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png" curse="Basic JavaScript Course" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/1282-0e968fd9-e8d4-406c-999b-940608e2b01a.png" curse="Customer service and user support" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png" curse="Basic Programming Course" instituto="Platzi"/>
            </section>
            

        );
    }
}

export default Education;