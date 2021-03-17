import React from 'react'
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';
import Card from '../complements/Card';

import '../../assets/styles/Colaboration.scss'

class Colaboration extends React.Component {
    render() {
        return (
            <section className="container setc-main" id="Reconendation">
                <SectionOne icoClass="fas fa-server icon-section" tlite="¿Por qué decidi hacer esto?" description="voluptate esse debitis reprehenderit, ipsa eaque hic, pariatur dicta laboriosam repellat quidem repellendus beatae aut saepe." />
                <div className="sectionOne">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt dolore? Dignissimos soluta sapiente modi dolorum necessitatibus cupiditate voluptatum quis quidem facere nobis adipisci aperiam architecto, exercitationem tenetur nulla. Voluptatem.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laudantium ut quis quia magnam voluptate esse debitis reprehenderit, ipsa eaque hic, pariatur dicta laboriosam repellat quidem repellendus beatae aut saepe.</p>
                </div>
                <div>
                    <div className="card text-center card-colaboration">
                        <div className="card-body">
                        <div className="tlites">
                    <Card url="https://www.parddo.com/img/payu.png" />
                </div>
                            <h3 className="card-title">Puedes ayudarme de forma segura con Pay<b>U</b></h3>
                            <div className="btn-colaboration">
                               <a href="https://biz.payulatam.com/B0e0d4d238006E4"> <button type="button" class="btn btn-success"><samp></samp> $20.000 Pay<b>U</b></button></a>
                               <a href=""> <button type="button" class="btn btn-success "><samp></samp> $50.000 Pay<b>U</b></button></a>
                               <a href=""> <button type="button" class="btn btn-success btn-lg btn-block"><samp></samp> $100.000 Pay<b>U</b></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}


export default Colaboration;