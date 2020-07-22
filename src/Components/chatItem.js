import React, { Component } from 'react';

export default class ChatItem extends Component{

    getTime = () => {
        let date = new Date();
        let dateStr ;
        dateStr = `${date.getHours()}:${date.getMinutes()}`;
        return dateStr;
    }

    render() {
        return (
             <div style={{border : '1px solid black',padding : '0.3em',width : '600px', boxShadow : '0 0 3px rgba(0,0,0,0.3)'}}>
                 <h3>{this.props.userName}   <small> { this.getTime() } </small></h3>
                 <p> { this.props.message } </p>
             </div>
        );
    }
}