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
                            <p className="photo-name__name-subtitle">JavaScript <span>Developer</span></p>
                        </div>
                    </div>
                    < NavSocial />
                    <div className="summary-about">
                        <h3 className="summary-about__title">About me</h3>
                        <p className="summary-about__paragraph">Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology and the variants that are based on it.</p>
                    </div>
                    <div className="div-button">
                        <a href="https://api.whatsapp.com/send?phone=573003865594&text=Hola%20Camilo!" target="_blank"><ButomPrimary nameclass="btn btn-success button__profile" textt="Send Message"/></a>               
                    </div>
                </div>
            </section>

        );
    }
}

export default Profile;