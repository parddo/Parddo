import React from 'react';
import ReactDom from  'react-dom';

import '../../assets/styles/Lenguaje.scss'

class  Lenguaje extends React.Component {
    render(){
        this.props;
        return(
            <div className="lenguaje">
                <div className=".float-sm-right lenguaje-porcentage">
                    <p className="lenguaje-porcentage__p">{this.props.porcentage}</p>
                </div>
                <div className="lenguaje-flex">
                    <div className="lenguaje-tlite">
                        <p className="lenguaje-tlite__p " translate="no">{this.props.tlite}</p>
                    </div>
                    <div className="lenguaje-progres">
                        <div  className="lenguaje-progres__barra">
                            <div  className={this.props.tlite}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lenguaje;



