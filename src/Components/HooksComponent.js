import React, { useState } from 'react';

export default function HooksComponent(){
    const [color, setColor] = useState("red");
    const divStyle = {backgroundColor: color};

    return(
        <div style={divStyle}>
            <p>The color is {color}</p>
            <button onClick={() => setColor("Aquamarine")}>
                Aquamarine
            </button>
        </div>
    )
}