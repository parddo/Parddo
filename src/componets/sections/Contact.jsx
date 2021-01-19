import React from 'react';
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';

import '../../assets/styles/Contact.scss'
import NavSocial from '../complements/NavSocial';

class Contact extends React.Component {
    render(){
        return(
            <section className="container setc-main">
                <SectionOne  icoClass="far fa-envelope icon-section"  tlite="Contact" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum, libero officiis, fugit blanditiis eveniet sint deserunt iusto aspernatur cumque facere ea expedita. Ex officia cumque quaerat, saepe labore praesentium!" />
                
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