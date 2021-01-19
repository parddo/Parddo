import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';
import Technologies from '../complements/Technologies';


import '../../assets/styles/AboutMe.scss'

class AboutMe extends React.Component {
    render(){
        return (
            <section className="container setc-main">
                <SectionOne  icoClass="fas fa-user-check icon-section"  tlite="About Me" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology and the variants that are based on it. 1 It was founded in 2014 by the Colombian engineer Freddy Vega and the Guatemalan computer scientist Christian Van Der Henst." />
                <div className="technologies">
                    <Technologies  nameClass="fas fa-globe-americas" tecnologi="Web"/>
                    <Technologies  nameClass="fab fa-js-square" tecnologi="JavaScript"/>
                    <Technologies  nameClass="fab fa-react" tecnologi="React"/>
                    <Technologies  nameClass="fab fa-node-js" tecnologi="Node JS"/>
                </div>
                <div className="card text-center card-cv">
                  <div className="card-body">
                    <h3 className="card-title">Soon</h3>
                    <a href="#" className="btn btn-success">Download CV</a>
                  </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;