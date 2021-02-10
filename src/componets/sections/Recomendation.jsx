import React from 'react'
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';
import Card from '../complements/Card';


class Recomendation extends React.Component {
    render (){
        return(
            <section className="container setc-main" id="Reconendation">
                <SectionOne  icoClass="fas fa-server icon-section"  tlite="Are you looking for a web hosting service?" description="Latinoamérica hosting provides services for web hosting, virtual and dedicated servers, domain name registration, SSL certificates, corporate email accounts, backup systems, among others." />
                <div className="tlites">
                    <Card  url="https://i.ytimg.com/vi/cFV03ax9rKo/maxresdefault.jpg"/>
                </div>  
                <div className="card text-center card-cv">
                  <div className="card-body">
                    <h3 className="card-title">Do you want to know their plans?</h3>
                    <a download="Hoja_de_vida_Camilo_Pardo.pdf" href="https://clientes.latinoamericahosting.com.co/aff.php?aff=536" target="_blank" className="btn btn-primary"><i class="fas fa-arrow-circle-right"></i> Watch now</a>
                  </div>
                </div>
            </section>
        )
    };
}


export default Recomendation;