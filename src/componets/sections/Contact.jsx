import React from 'react';
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';

import '../../assets/styles/Contact.scss'
import NavSocial from '../complements/NavSocial';

class Contact extends React.Component {
    render() {
        return (
            <section className="container setc-main" id="Contact">
                <SectionOne icoClass="far fa-envelope icon-section" tlite="Contact" description="Recuerda que puedes contactarme en cualquier momento." />
                <div className="contac-info">
                    <div>
                        <ul>
                            <li><b>Ubicación: </b> Medellín-Colombia</li>
                            <li><b>Teléfono: </b> +57 3003865594</li>
                            <li><b>Correo: </b> contacto@parddo.com</li>
                        </ul>
                    </div>
                   <div className="contacto-social">
                       <h4>Sígueme en redes</h4>
                       <NavSocial />
                   </div>
                </div>
            </section>
        );
    }
}

export default Contact;