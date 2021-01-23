import React from 'react';
import ReactDom from 'react-dom';
import Companie from '../complements/Companie';
import SectionOne from '../complements/SectionOne';

import '../../assets/styles/Experience.scss'

class Experience extends React.Component {
    render(){
        return (
            <section className="container setc-main" id="Experience">
                <SectionOne icoClass="fas fa-pencil-alt icon-section"  tlite="Work Experience" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology and the variants that are based on it. 1 It was founded in 2014 by the Colombian engineer Freddy Vega and the Guatemalan computer scientist Christian Van Der Henst." />
                 <div className="companies">
                    <Companie position="Administrative Assistant" date="DIC-2020 -- HOY"  companie="Speed Domicilios" urlName="www.speeddomicilios.co" url="www.rgc.com.co" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology" />
                    <Companie position="Administrative Assistant" date="AGO-2019 -- DIC-2O19"  companie="Car Asistencia" urlName="www.carasistencia.com" url="www.rgc.com.co" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology" />
                    <Companie position="Administrative Assistant" date="DIC-2017 -- DIC-2O18"  companie="RGC Asesores" urlName="www.rgc.com.co" url="www.rgc.com.co" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology" />

                 </div>
            </section>
        );
    }
}

export default Experience;