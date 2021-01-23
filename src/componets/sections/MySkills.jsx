import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';


import '../../assets/styles/MySkills.scss'
import Lenguaje from '../complements/Lenguaje';

class MySkills extends React.Component {
    render(){
        return(
            <section className="container setc-main">
                <SectionOne  icoClass="far fa-check-circle icon-section"  tlite="My skills" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology and the variants that are based on it. 1 It was founded in 2014 by the Colombian engineer Freddy Vega and the Guatemalan computer scientist Christian Van Der Henst." />
                <div className="skillsProfesionls">
                    <div className="skillsProfesionls-tlite">
                        <h4 className="skillsProfesionls-tlite__h3">Professional skills</h4>
                    </div>
                    <div className="skillsFlex">
                        <div className="skillsFlex-section" >
                            <Lenguaje tlite="Excel" porcentage="85%"/ >
                            <Lenguaje  tlite="Html"porcentage="70%"/>
                            <Lenguaje  tlite="Css"porcentage="64%"/>
                        </div>
                        <div className="skillsFlex-section">
                            <Lenguaje  tlite="JavaScript" porcentage="60%"/>
                            <Lenguaje  tlite="React" porcentage="45%"/>
                            <Lenguaje  tlite="English" porcentage="10%"/>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
        );
    }
}

export default MySkills;