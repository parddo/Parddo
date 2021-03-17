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
                <h2 className="cover-page__info--h2">Me llamo</h2>
                <h4 className="cover-page__info--h4">Camilo Andres Pardo</h4>
                <p className="cover-page__info--p">  <span>Asistente de </span> sistemas</p>
                <a href="https://api.whatsapp.com/send?phone=573003865594&text=Hola%20Camilo!" target="_blank"><ButomPrimary nameclass="btn btn-success button__profile" textt="Enviar Mensaje"/></a>    
            </div>
            <div className="cover-page__photo">
               <img className="cover-page__photo--img" src={this.props.imgProfile} alt="img"></img>
            </div>
        </section>
        );
    }
}

export default Cover;