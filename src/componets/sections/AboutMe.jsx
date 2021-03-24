import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';
import Technologies from '../complements/Technologies';


import '../../assets/styles/AboutMe.scss'

class AboutMe extends React.Component {
    render(){
        return (
            <section className="container setc-main" id="AboutMe">
                <SectionOne  icoClass="fas fa-user-check icon-section"  tlite="Sobre mí" description="Soy estudiante de ingeniería de sistemas, cuento con conocimientos básicos en desarrollo web. A nivel personal, soy una persona muy comprometida, responsable, autodidacta y apasionada en todo lo que tiene que ver con lenguajes y sistemas de programación."  />
                <div className="technologies">
                    <Technologies  nameClass="far fa-file-excel" tecnologi="Excel"/>
                    <Technologies  nameClass="fas fa-globe-americas" tecnologi="Web"/>
                    <Technologies  nameClass="fab fa-js-square" tecnologi="JavaScript"/>
                    <Technologies  nameClass="fab fa-react" tecnologi="React"/>
                </div>
                <div className="card text-center card-cv">
                  <div className="card-body">
                    <h3 className="card-title">¿Desea saber más?</h3>
                    <a download="Hoja_de_vida_Camilo_Pardo.pdf" href="https://www.parddo.com/pdf/CamiloPardo.pdf" className="btn btn-success"><i className="fas fa-cloud-download-alt"></i> Descargar CV</a>
                  </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;