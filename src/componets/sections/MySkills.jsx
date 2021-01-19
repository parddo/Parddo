import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';


import '../../assets/styles/MySkills.scss'
import Lenguaje from '../complements/Lenguaje';

class MySkills extends React.Component {
    render(){
        return(
            <section className="container setc-main">
                <SectionOne  icoClass="far fa-check-circle icon-section"  tlite="My skills" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum, libero officiis, fugit blanditiis eveniet sint deserunt iusto aspernatur cumque facere ea expedita. Ex officia cumque quaerat, saepe labore praesentium!" />
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis itaque blanditiis tempora quis? Explicabo assumenda recusandae fugiat, voluptates reprehenderit distinctio ipsum corrupti maxime ratione illo laboriosam reiciendis sapiente tenetur?</p>
            </section>
        );
    }
}

export default MySkills;