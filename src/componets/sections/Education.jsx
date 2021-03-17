import React from 'react';
import ReactDom from 'react-dom';
import Card from '../complements/Card';
import SectionOne from '../complements/SectionOne';
import Tlites from '../complements/Tlites';

class Education extends React.Component {
    render(){
        return (
            <section className="container setc-main" id="Education">
                <SectionOne  icoClass="fas fa-user-graduate icon-section"  tlite="Educación" description="Actualmente estudio ciencia de datos y desarrollo backend en Platzi, en esta misma plataforma he adquirido mis conocimientos en desarrollo front-end y otras áreas. A continuación, compartiré una lista de mis últimos cursos." />
                <div className="tlites">
                    <Card  url="https://images.pexels.com/photos/1422292/pexels-photo-1422292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" description="Este fue un curso donde aprendi a manejar sasss, este fue un exelete curso"  />
                </div>  
                    <Tlites  url="https://static.platzi.com/media/achievements/badge-react-2018-afc93257-48af-4e54-acaa-4d0433380f64.png" curse="Curso de React JS" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png" curse="Curso profesional de Git y GitHub" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/learningpath/badges/484f81a2-17b7-4b03-b047-62ba129521b2.jpg" curse="Escuela JavaScript" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png" curse="Curso básico de JavaScript" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/1282-0e968fd9-e8d4-406c-999b-940608e2b01a.png" curse="Atención al cliente y soporte al usuario" instituto="Platzi"/>
                    <Tlites  url="https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png" curse="Curso de programación básica" instituto="Platzi"/>
            </section>
            

        );
    }
}

export default Education;