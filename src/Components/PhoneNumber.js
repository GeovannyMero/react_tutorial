import React, { useState } from 'react';

//regex to match number
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber(){
    const [phone, setPhone] = useState('');

    const handleChange = ({target}) => {
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);
        if(isValid){
            setPhone(newPhone);
        }
    }

    return (
        <div>
            <label for='phone-input'>Phone: </label>
            <input value={phone} onChange={handleChange} id='phone-input'/>
        </div>
    )
}