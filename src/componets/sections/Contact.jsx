import React from 'react';
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';

import '../../assets/styles/Contact.scss'
import NavSocial from '../complements/NavSocial';

class Contact extends React.Component {
    render() {
        return (
            <section className="container setc-main" id="Contact">
                <SectionOne icoClass="far fa-envelope icon-section" tlite="Contact" description="Platzi is a Latin American online education platform. It is aimed at all audiences, however, its objective is education in technology and the variants that are based on it." />
                <div className="contac-info">
                    <div>
                        <ul>
                            <li><b>Location: </b> Medellín-Colombia</li>
                            <li><b>Phone: </b> +57 3003865594</li>
                            <li><b>Email: </b> contacto@parddo.com</li>
                        </ul>
                    </div>
                    <NavSocial />
                </div>
            </section>
        );
    }
}

export default Contact;