import React from 'react';
import ReactDom from 'react-dom';
import SectionOne from '../complements/SectionOne';
import Technologies from '../complements/Technologies';


import '../../assets/styles/AboutMe.scss'

class AboutMe extends React.Component {
    render(){
        return (
            <section className="container setc-main">
                <SectionOne  icoClass="fas fa-user-check icon-section"  tlite="About Me" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum, libero officiis, fugit blanditiis eveniet sint deserunt iusto aspernatur cumque facere ea expedita. Ex officia cumque quaerat, saepe labore praesentium!" />
                <div className="technologies">
                    <Technologies  nameClass="fas fa-globe-americas" tecnologi="Web"/>
                    <Technologies  nameClass="fab fa-js-square" tecnologi="JavaScript"/>
                    <Technologies  nameClass="fab fa-react" tecnologi="React"/>
                    <Technologies  nameClass="fab fa-node-js" tecnologi="Node JS"/>
                </div>
                <div className="card text-center card-cv">
                  <div className="card-body">
                    <h3 className="card-title">Soon</h3>
                    <a href="#" className="btn btn-success">Download CV</a>
                  </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;