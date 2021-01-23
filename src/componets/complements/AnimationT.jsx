import React from 'react';
import ReactDom from 'react-dom';

import '../../assets/styles/AnimationT.scss'

class AnimationT extends React.Component {
    render(){
        return(
            <div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
            </div>
        );
    }
}

export default AnimationT;