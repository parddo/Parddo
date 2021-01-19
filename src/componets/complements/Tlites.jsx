import React from 'react';
import ReactDom from 'react-dom';
 
import '../../assets/styles/Tlites.scss';

class Tlites extends React.Component {
    render(){
        this.props;
        return(
            <div className="curses">
                <img src={this.props.url} alt=""></img>
                <h6>{this.props.curse}</h6>
                <h5>{this.props.instituto}</h5>
            </div>
        );
    }

}

export default Tlites