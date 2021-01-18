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
                        <p className="summary-about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id asperiores placeat accusamus beatae facere odio nostrum dolores excepturi, repellendus, deserunt minus facilis voluptates eligendi? Soluta provident modi sunt commodi?</p>
                    </div>
                    <div className="div-button">
                        <ButomPrimary nameclass="btn btn-success button__profile" textt="Contact now"/>
                    </div>
                </div>
            </section>

        );
    }
}

export default Profile;