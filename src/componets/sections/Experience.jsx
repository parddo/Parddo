import React from 'react';
import ReactDom from 'react-dom';
import Companie from '../complements/Companie';
import SectionOne from '../complements/SectionOne';

import '../../assets/styles/Experience.scss'

class Experience extends React.Component {
    render(){
        return (
            <section className="container setc-main" id="Experience">
                <SectionOne icoClass="fas fa-pencil-alt icon-section"  tlite=" Experiencia laboral" description="A través de la experiencia de los últimos tres años, he aprendido a implementar diferentes tecnologías web para la sistematización de procesos, lo que me ha permitido detectar errores y posibilidades de automatización en los mismos." />
                 <div className="companies">
                    <Companie position="Técnico de soporte" date="FEB-2021 -- MAR-2021"  companie="Latinoamérica Hosting" urlName="www.latinoamericahosting.com" url="https://www.latinoamericahosting.com.co" description="Atención al usuario, asesoría comercial y soporte técnico." />
                    <Companie position="Asistente Administrativo" date="AGO-2019 -- DIC-2O19"  companie="Car Asistencia" urlName="www.carasistencia.com" url="https://www.carasistencia.com" description="Sistematización y automatización de procesos en las áreas de calidad y gestión humana." />
                    <Companie position="Asistente Administrativo" date="DIC-2017 -- DIC-2O18"  companie="RGC Asesores" urlName="www.rgc.com.co" url="https://www.rgc.com.co" description="Gestión, automatización y análisis de bases de datos con herramientas como: Excel y Acces." />
                 </div>
            </section>
        );
    }
}

export default Experience;