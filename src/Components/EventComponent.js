import React from 'react';

export default class EventComponent extends React.Component{
    handleEvent(){
        alert("Hello");
    }
    render(){
        return(
            <div>
                <h1 onClick={this.handleEvent}>click me</h1>
            </div>
        )
    }
}