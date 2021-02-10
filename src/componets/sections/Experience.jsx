import React from 'react';
import ReactDom from 'react-dom';
import Companie from '../complements/Companie';
import SectionOne from '../complements/SectionOne';

import '../../assets/styles/Experience.scss'

class Experience extends React.Component {
    render(){
        return (
            <section className="container setc-main" id="Experience">
                <SectionOne icoClass="fas fa-pencil-alt icon-section"  tlite="Work Experience" description="Through the experience of the last three years, I have learned to implement different web technologies for the systematization of processes, which has allowed me to detect errors and automation possibilities in them." />
                 <div className="companies">
                    <Companie position="Support Technician" date="FEB-2021 -- HOY"  companie="Latinoamerica Hosting" urlName="www.latinoamericahosting.com" url="https://www.latinoamericahosting.com.co" description="Customer service, technical support to the user and sales." />
                    <Companie position="System Assistant" date="DIC-2020 -- ENE-2021"  companie="Speed Domicilios" urlName="www.speeddomicilios.co" url="https://www.speeddomicilios.co" description="Systematization and automation of processes in the areas of operations and human management." />
                    <Companie position="Administrative Assistant" date="AGO-2019 -- DIC-2O19"  companie="Car Asistencia" urlName="www.carasistencia.com" url="https://www.carasistencia.com" description="Systematization and automation of processes in the areas of quality and human management." />
                    <Companie position="Administrative Assistant" date="DIC-2017 -- DIC-2O18"  companie="RGC Asesores" urlName="www.rgc.com.co" url="https://www.rgc.com.co" description="Management, automation and analysis of databases with tools such as: Excel and Acces." />

                 </div>
            </section>
        );
    }
}

export default Experience;