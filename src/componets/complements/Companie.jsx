import React from 'react';
import ReactDom from 'react-dom'

import '../../assets/styles/Companie.scss'

class Companie extends React.Component {
    render(){
        this.props;
        return(
            <div className="companie"> 
                <div className="companie-tlite">
                    <h5 className="companie-tlite__h5"><samp><i className="fas fa-bullseye"></i></samp>{this.props.position}</h5>
                </div>
                <div className="companie-dates">
                    <div className="companie-fech">
                        <p className="Companie-fech-date">{this.props.date} </p>
                    </div>
                    <div className="companie-info">
                        <h6 className="companie-info__name">{this.props.companie}</h6>
                        <p className="companie-info__description">{this.props.description}</p>
                    </div>
                    <div className="companie-link">
                        <a className="companie-link__a" href={this.props.url}>{this.props.urlName}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Companie;