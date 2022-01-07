import React from 'react';
import './ContactModal.css';
    
const ContactModal = (props) => {
    console.log(props.handleClose);
    const handleValue =(event)=> {
        const editToContact ={  
            ...props.contactToEdit,
            [event.target.name]: event.target.value,
            [event.target.number]: event.target.value,
            [event.target.img]: event.target.value

        }   
        props.setContactToEdit(editToContact)
    }
    return (
        <div className='wrap'> 
        <a href="https://github.com/"> <h1>Save Contacts</h1></a>
        <input onChange={handleValue}  value={props.contactToEdit.name} name='name' type="text" placeholder='Enter your name'/>
        <input onChange={handleValue}  value={props.contactToEdit.number} name='number' type="text" placeholder='Enter your number'/>
        <input onChange={handleValue}  value={props.contactToEdit.img}  name='img' type="text" placeholder='Enter your src'/>
        <button className='btncl' onClick={ props.closeMod}>close</button>
        <button className='btned' onClick={()=>
             props.upDateContact()}>Save</button>
        </div>
    );
};
export default ContactModal;    