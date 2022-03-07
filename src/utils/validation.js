import React from 'react';

export const isEmailValid = (value) =>{
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    return !validEmail.test(value);
}

export const isPhoneValid = (value)=>{
    const PhoneValid = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
    return !PhoneValid.test(value);
}
