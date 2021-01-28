import React from 'react';
import ReactDom from 'react-dom'
import ButomPrimary from '../btns/ButomPrimary';

import '../../assets/styles/Cover.scss';

class Cover extends React.Component {
    render(){
        this.props;
        return (
            <section className="cover-page container">
            <div className="cover-page__info">
                <h2 className="cover-page__info--h2">My name is</h2>
                <h4 className="cover-page__info--h4">Camilo Andres Pardo P</h4>
                <p className="cover-page__info--p">  <span>Systems </span> Assistant</p>
                <a href="https://api.whatsapp.com/send?phone=573003865594&text=Hola%20Camilo!" target="_blank"><ButomPrimary nameclass="btn btn-success button__profile" textt="Send Message"/></a>    
            </div>
            <div className="cover-page__photo">
               <img className="cover-page__photo--img" src={this.props.imgProfile} alt="img"></img>
            </div>
        </section>
        );
    }
}

export default Cover;