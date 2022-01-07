import React from 'react';
import './ContactCard.css'
// import ContactList from '../ContactList/ContactList';


const ContactCard = (props) => {
    // console.log(props.getContactToEdit);
    const delCont = (id) =>{
        props.delBtn(id)
    }
    return (
        <div className='card' >
            <h2>Info of Person</h2>
            <a href="#"><h3>Name: {props.item.name}</h3></a>
            <a href="#"><h3>Number: +996 {props.item.number}</h3></a>
            <img src={props.item.img} alt="Здесь должно быть картинка" />
            <button className='btndel' onClick={()=> delCont(props.item.id)}>del</button>
            <button className='btnedit' onClick={()=> props.getContactToEdit(props.item)}>Edit</button>
            
        </div>
    );
};

export default ContactCard;