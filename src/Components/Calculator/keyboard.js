import React from 'react';

export default class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {cero: 0}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert(this.state.cero);
    }

    render(){
        return(
            <div>
                <button value={this.state.cero} onClick={this.handleClick}>
                   {this.state.cero}
                </button>
            </div>
        );

    }
}