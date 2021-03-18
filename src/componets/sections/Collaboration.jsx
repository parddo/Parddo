import React from 'react'
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';
import Card from '../complements/Card';

import '../../assets/styles/Colaboration.scss'

class Colaboration extends React.Component {
    render() {
        return (
            <section className="container setc-main" id="Reconendation">
                <SectionOne icoClass="fas fa-business-time" tlite="Busco empleo" description="Cuento con experiencia como auxiliar administrativo y técnico de soporte en servicios de alojamiento web, actualmente vivo en la ciudad de Medellín, pero cuento con disponibilidad para mudarme a otras ciudades como Bogotá o Cali en caso de que sea necesario." />
                <div className="sectionOne history">
                    <div className="hisotory-photo">
                        <img className="hisotory-photo__img" src="https://parddo.com/img/photo.jpg" alt=""></img>
                    </div>
                    <div className="hisotory-description">
                        <p className="hisotory-description__content">Decidí buscar empleo de esta manera, ya que en estos momentos se me ha dificultado para todo lo que ha sido mi alimentación, el arriendo, transporte, entre otros. También tomé esta decisión, porque creo que no hay justificación alguna para renunciar a mis estudios y dejar de perseguir mis sueños y aspiraciones.</p>
                        <p className="hisotory-description_content">Sí tú no tienes una oferta laboral para mí, pero deseas ayudarme, lo puedes hacer con todo lo que tú creas que me sirve para seguir adelante y salir de esta situación.</p>
                        <h4>¡Muchas gracias!</h4>
                    </div>
                </div>
            </section>
        )
    };
}


export default Colaboration;