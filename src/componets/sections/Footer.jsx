import React from 'react';
import ReactDom from 'react-dom';

import '../../assets/styles/Footer.scss'
class Footer extends React.Component {
    render(){
        return(
            <footer className="container footer">
                <div className="text-center content-footer">
                    <p>Hecho con 💚 por Camilo Pardo <b>2021</b></p>
                </div>
            </footer>
        )
    }
}

export default Footer;