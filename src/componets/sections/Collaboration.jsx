import React from 'react'
import ReactDom from 'react-dom'
import SectionOne from '../complements/SectionOne';
import Card from '../complements/Card';

import '../../assets/styles/Colaboration.scss'

class Colaboration extends React.Component {
    render() {
        return (
            <section className="container setc-main" id="Reconendation">
                <SectionOne icoClass="fas fa-business-time" tlite="¡Busco empleo!" description="voluptate esse debitis reprehenderit, ipsa eaque hic, pariatur dicta laboriosam repellat quidem repellendus beatae aut saepe." />
                <div className="sectionOne history">
                    <div className="hisotory-photo">
                        <img className="hisotory-photo__img" src="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.0-9/143868746_109425014468986_3537681929869559314_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFOKpReVgBXUI7ugHnwGN8lpUCJIt7WHy6lQIki3tYfLv11NCNIOA0sqxAylpeVIZ2XHRJzvRYrTiaQz0Ads3By&_nc_ohc=w1qOV1yF7_kAX8xkSBz&_nc_ht=scontent.feoh1-1.fna&oh=db1f0146af9dcf3b1e1a509cb9db027d&oe=6075C765" alt=""></img>
                    </div>
                    <div className="hisotory-description">
                        <p className="hisotory-description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt dolore? Dignissimos soluta sapiente modi dolorum necessitatibus cupiditate voluptatum quis quidem facere nobis adipisci aperiam architecto, exercitationem tenetur nulla. Voluptatem.</p>
                        <p className="hisotory-description_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laudantium ut quis quia magnam voluptate esse debitis reprehenderit, ipsa eaque hic, pariatur dicta laboriosam repellat quidem repellendus beatae aut saepe.</p>
                    </div>
                </div>
                <div>
                    <div className="card text-center card-colaboration">
                        <div className="card-body">
                            
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