import React from 'react';
import ContactCard from '../ContantsCard/ContactCard';
import './ContactList.css'

const ContactList = (props) => {
    return (
        <div className='list'>
            {
                props.contact.map((item, index)=> (
                   <ContactCard  item={item} delBtn={props.delBtn} getContactToEdit={props.getContactToEdit}/> 
                ))
            }
        </div>
    );
};
export default ContactList;