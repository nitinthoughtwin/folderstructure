import React from 'react';

export const InputField = (props) => {
    const { value, onChange, placeHolder, label} = props;
    
    return <>
    <br/>
    <label>{label}</label>
        <input type="text" 
        value={value} 
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeHolder}
         />
    </>
}   