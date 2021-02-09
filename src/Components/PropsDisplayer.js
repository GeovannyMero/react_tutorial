import React from 'react';
import ReactDOM from 'react-dom';

export default class PropsDisplayer extends React.Component{
    render(){
        const stringProps = JSON.stringify(this.props);

        return (
            <div>
                <h1>Check out my props</h1>
                <h3>{stringProps}</h3>
                <h4>My Name is: {this.props.name}</h4>
            </div>
        )
    }
}