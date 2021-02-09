import { render } from '@testing-library/react';
import React from 'react';

export function FunctionalComponent(props){
    
        return(
            <div>
                <h2>{props.name}</h2>
            </div>
        )
    
}