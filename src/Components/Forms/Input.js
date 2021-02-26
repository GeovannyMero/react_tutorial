import React from 'react';

export default class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {name: 'Geovanny'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        });
    }

    render(){
        return(
            <div>
                <input onChange={this.handleChange} value={this.state.name}/>
                <h1>Hello, {this.state.name}</h1>
            </div>
        );
    }
}