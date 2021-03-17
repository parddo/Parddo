import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';


import '../../assets/styles/MySkills.scss'
import Lenguaje from '../complements/Lenguaje';

class MySkills extends React.Component {
    render(){
        return(
            <section className="container setc-main" id="MySkills">
                <SectionOne  icoClass="far fa-check-circle icon-section"  tlite="Mis habilidades" description="Actualización sobre las tendencias del mercado de desarrollo web y ofimática, así como la capacidad de aprender rápidamente nuevas tecnologías. Facilidad de aprendizaje y versatilidad, preparación para escenarios desafiantes y para salir de la zona de confort." />
                <div className="skillsProfesionls">
                    <div className="skillsProfesionls-tlite">
                        <h4 className="skillsProfesionls-tlite__h3">Habilidades profesionales</h4>
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
                            <Lenguaje  tlite="Ingles" porcentage="10%"/>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
        );
    }
}

export default MySkills;