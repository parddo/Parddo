import React from 'react';
import ReactDom from 'react-dom';
import ButomPrimary from '../btns/ButomPrimary';
import NavSocial from '../complements/NavSocial';

import '../../assets/styles/Profile.scss';

class Profile extends React.Component {
    render(){
        this.props;
        return(
            <section className="profile bag__color--1 ">
                <div className="profile_container">
                    <div className="photo-name">
                        <div className="photo-name__photo">
                            <img className="photo-name__img--img" src={this.props.imgProfile} alt=""></img>
                        </div>
                        <div className="photo-name__name">
                            <h2 className="photo-name__name--name">Camilo Pardo</h2>
                            <p className="photo-name__name-subtitle"><span>JavaScript </span> Developer</p>
                        </div>
                    </div>
                    < NavSocial />
                    <div className="summary-about">
                        <h3 className="summary-about__title">Sobre mí</h3>
                        <p className="summary-about__paragraph">Soy estudiante de ingeniería de sistemas, cuento con conocimientos básicos en desarrollo web. Soy autodidacta y me apasiona todo lo que tiene que ver con lenguajes y sistemas de programación.</p>
                    </div>
                    <div className="div-button">
                        <a href="https://api.whatsapp.com/send?phone=573003865594&text=Hola%20Camilo!" target="_blank"><ButomPrimary nameclass="btn btn-success button__profile" textt="Enviar Mensaje"/></a>               
                    </div>
                </div>
            </section>

        );
    }
}

export default Profile;