import React from 'react';
import ReactDom from 'react-dom';

import '../../assets/styles/Technologies.scss'
class Technologies extends React.Component{
    render(){
        this.props;
        return(
            <div className="technologie">
                <i className={this.props.nameClass}></i>
                <h6 translate="no">{this.props.tecnologi}</h6>
            </div> 
        );
    }
}

export default Technologies;