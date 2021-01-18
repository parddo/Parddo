import React from 'react';
import ReactDom from 'react-dom';

class ButomPrimary extends React.Component {
    render(){
        this.props;
        return(
            <button type="button" className={this.props.nameclass}> {this.props.textt} </button>
        );
    }
}


export default ButomPrimary;