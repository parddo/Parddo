import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';
import Technologies from '../complements/Technologies';


import '../../assets/styles/AboutMe.scss'

class AboutMe extends React.Component {
    render(){
        return (
            <section className="container setc-main" id="AboutMe">
                <SectionOne  icoClass="fas fa-user-check icon-section"  tlite="About Me" description="I am a systems engineering student, with knowledge in web development. On a personal level, I am a very committed, responsible, self-taught and passionate person in everything that has to do with programming languages ​​and systems."  />
                <div className="technologies">
                    <Technologies  nameClass="far fa-file-excel" tecnologi="Excel"/>
                    <Technologies  nameClass="fas fa-globe-americas" tecnologi="Web"/>
                    <Technologies  nameClass="fab fa-js-square" tecnologi="JavaScript"/>
                    <Technologies  nameClass="fab fa-react" tecnologi="React"/>
                </div>
                <div className="card text-center card-cv">
                  <div className="card-body">
                    <h3 className="card-title">Do you want to know more?</h3>
                    <a download="Hoja de vida Camilo Pardo.pdf" href="https://www.parddo.com/pdf/CamiloPardo.pdf" className="btn btn-success"><i className="fas fa-cloud-download-alt"></i> Download CV</a>
                  </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;