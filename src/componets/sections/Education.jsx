import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import Card from '../complements/Card';
import SectionOne from '../complements/SectionOne';
import Tlites from '../complements/Tlites';

 const Education = () => {


    const [curses , setCurses] =useState ([]);

    useEffect (()=> {
        fetch("https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@camilo-pardo")
        .then(response => response.json())
        .then(data => setCurses(data.userData.courses))
    }, []);


        return (
            <section className="container setc-main" id="Education">
                <SectionOne  icoClass="fas fa-user-graduate icon-section"  tlite="Educación" description="Actualmente estudio ciencia de datos y desarrollo backend en Platzi, en esta misma plataforma he adquirido mis conocimientos en desarrollo front-end y otras áreas. A continuación, compartiré una lista de mis últimos cursos." />
                <div className="tlites">
                    <Card  url="https://images.pexels.com/photos/1422292/pexels-photo-1422292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" description="Este fue un curso donde aprendi a manejar sasss, este fue un exelete curso"  />
                </div>  

                {curses.map(curse =>(
                    <Tlites key={curse.id} url={curse.badge} curse={curse.title} instituto="Platzi"/>
                ))}
            </section>            
        );
}

export default Education;