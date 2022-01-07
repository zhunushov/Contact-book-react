import React, { useState } from 'react';
import './AddContact.css'
const AddContact = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [img, setImg] = useState('')


    const nameInput=(event)=> {
        setName(event.target.value)
    }
    const numberInput=(event)=> {
        setNumber(event.target.value)
    }
    const imgInput=(event)=> {
        setImg(event.target.value)
    }
    const addCont = () => {
        const newContact = {
            name,   
            number,
            img,
            id: Date.now()
        }
        if( !name || !number || !img){
            return alert("Error")
        }
        props.handleAdd(newContact)
        setName('')
        setNumber('')
        setImg('')
        
    }
    return (
        <div className='add'>
            <h2>Adding contacts</h2>
            <input type="text" 
            onChange={nameInput}
            value={name}
            placeholder='Enter your name...'
            />
            <input type="number"
            onChange={numberInput}
            value={number}
            placeholder='Enter your number...'
            />
            <input type="text" 
            onChange={imgInput}
            value={img}
            placeholder='Enter your img...'            
            /> 
            <button className='btn' onClick={addCont}>Add Contact</button>
        </div>
    );
};
export default AddContact;