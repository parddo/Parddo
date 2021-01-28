import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';


import '../../assets/styles/MySkills.scss'
import Lenguaje from '../complements/Lenguaje';

class MySkills extends React.Component {
    render(){
        return(
            <section className="container setc-main" id="MySkills">
                <SectionOne  icoClass="far fa-check-circle icon-section"  tlite="My skills" description="Update on the trends of the web development and office automation market, as well as the ability to quickly learn new technologies. Ease of learning and versatility, preparation for challenging scenarios and to get out of the comfort zone." />
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