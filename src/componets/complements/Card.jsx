import React from 'react';
import ReactDom from 'react-dom';

class Card extends React.Component {
    render (){
        this.props;
        return (
            <div>
                <img src={this.props.url} className="img-fluid" alt="Responsive image"></img>
            </div>
        );
    }
}

export default Card;