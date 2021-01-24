import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';


import '../../assets/styles/MySkills.scss'
import Lenguaje from '../complements/Lenguaje';

class MySkills extends React.Component {
    render(){
        return(
            <section className="container setc-main" id="MySkills">
                <SectionOne  icoClass="far fa-check-circle icon-section"  tlite="My skills" description="I stand out for being a self-taught person with a great capacity for entrepreneurship and innovation. I am also proficient in programming tools and languages ​​such as: Excel and JavaScript." />
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