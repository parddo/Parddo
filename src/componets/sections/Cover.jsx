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
                <p className="cover-page__info--p">Junior JavaScript <span> Developer</span></p>
                <ButomPrimary nameclass="btn btn-success button__profile" textt="Contact now"/>
            </div>
            <div className="cover-page__photo">
               <img className="cover-page__photo--img" src={this.props.imgProfile} alt="img"></img>
            </div>
        </section>
        );
    }
}

export default Cover;