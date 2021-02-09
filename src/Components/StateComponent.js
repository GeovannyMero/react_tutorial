import React from 'react';

export default class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: 'Best App'};
        this.changeState = this.changeState.bind(this);
    }
    changeState(){
        this.setState({title: "New"});
    }

    render(){
        return(
            <div>
                <h1 onClick={this.changeState}>{this.state.title}</h1>
            </div>
        )
    }

}