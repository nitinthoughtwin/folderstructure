import { Container, Tab, Tabs } from '@mui/material';
import React, { useState, useEffect } from 'react';


import { InputField } from '../../component'
import { NavArea } from '../../layout';
import { get_list_API } from '../../services';
import { isEmailValid } from '../../utils/validation';
import {isEligible} from '../../utils/validation';

export const Home = () => {
   
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [products, setProducts] = useState([]);
    const[rollNumber, setRollNumber] = useState("Select")

    const arr = [1, 2, 3, 4, 5];
    const [one, two, three, f, fi] = arr;
    console.log("--one", one);
    console.log("--two", two);
    console.log("--three", fi)


    const obj = { key: 'nitin', label: 'new' }
    const { key, label } = obj;
    console.log("key", key);
    console.log("label", label);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(()=>{
      let data =   isEmailValid(fName)
      let age = isEligible(Number(fName))
      
      console.log("----data", data)
    },[fName])

    const getProducts = () => {
        const res = get_list_API().then(item => {
            setProducts(item.data)
        });
    }
   
    return (
        <>
            <NavArea/>
            {products.length}
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

            <select value={rollNumber} onChange={(e)=>setRollNumber(e.target.value)}>
                <option>Select</option>
                <option value="1">one</option>
                <option value="2">Two</option>
            </select>
        </>
    )
}
