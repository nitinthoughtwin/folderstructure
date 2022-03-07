import React, { useState, useEffect } from 'react';

import { InputField } from '../../component'

export const Home = () => {
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");

    const arr = [1,2,3,4,5];
    const [one,two,three,f,fi] = arr;
    console.log("--one", one);
    console.log("--two", two);
    console.log("--three", fi)


    const obj = {key:'nitin', label:'new'}
    const {key, label} = obj;
    console.log("key", key);
    console.log("label", label);

    useEffect(()=>{
             
    },[fName, lName]) 

    useEffect(()=>{
        return () => {           
            console.log("00000unmount")
        }
    },[])
    return (
        <>
            Home Parent component
            <InputField
                value={fName}
                onChange={setFname}
                placeHolder="Enter first name"
                label="First Name"
            />

            <InputField
                value={lName}
                onChange={setLname}
                placeHolder="Enter last name"
                label="Last Name"
            />
        </>
    )
}