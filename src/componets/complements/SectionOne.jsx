import React from 'react';
import ReactDom from 'react-dom';

import '../../assets/styles/SectionOne.scss';

class SectionOne extends React.Component { 
    render(){
        this.props;
        return(
            <div className="sectionOne">
                <h2> <i className={this.props.icoClass} ></i> {this.props.tlite}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default SectionOne