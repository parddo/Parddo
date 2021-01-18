import React from 'react';
import ReactDom from 'react-dom';
import '../../assets/styles/NavSocial.scss';

class NavSocial extends React.Component {
    render(){
        this.props;
        return(
            <div className="networks">
                <div className="social-networks">
                    <ul className="social-networks__list">
                        <li className="social-networks__list--li "><a className="social-networks__list--a" href="https://www.linkedin.com/in/camilo-andres-pardo-pardo-b0b036178/"><i className="fab fa-linkedin-in social-networks__list--i "></i></a></li>
                        <li className="social-networks__list--li "><a className="social-networks__list--a" href="https://twitter.com/Camilo__Pardo"><i className="fab fa-twitter social-networks__list--i"></i></a></li>
                        <li className="social-networks__list--li "><a className="social-networks__list--a" href=""><i className="fab fa-telegram-plane social-networks__list--i"></i></a></li>
                        <li className="social-networks__list--li "><a className="social-networks__list--a" href=""><i className="fab fa-whatsapp social-networks__list--i"></i></a></li>
                        <li className="social-networks__list--li "><a className="social-networks__list--a" href=""><i className="fas fa-phone social-networks__list--i"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavSocial;