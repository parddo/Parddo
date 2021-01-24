import React from 'react';
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';

import '../../assets/styles/Contact.scss'
import NavSocial from '../complements/NavSocial';

class Contact extends React.Component {
    render() {
        return (
            <section className="container setc-main" id="Contact">
                <SectionOne icoClass="far fa-envelope icon-section" tlite="Contact" description="Remember that you can contact me at any time." />
                <div className="contac-info">
                    <div>
                        <ul>
                            <li><b>Location: </b> Medellín-Colombia</li>
                            <li><b>Phone: </b> +57 3003865594</li>
                            <li><b>Mail: </b> contacto@parddo.com</li>
                        </ul>
                    </div>
                   <div>
                       
                       <NavSocial />
                   </div>
                </div>
            </section>
        );
    }
}

export default Contact;