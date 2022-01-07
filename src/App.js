import React, { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import ContactModal from './components/ContactModal/ContactModal';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [contact, setContact] = useState([])
  const [show, SetShow] = useState(false)
   const handleClose= ()=> SetShow(false)
   const handleShow =()=> SetShow(true)
   const [contactToEdit, setContactToEdit] = useState(null) 
   const getContactToEdit = (item) => {
    setContactToEdit(item)
     handleShow()
   }
   const upDateContact = ()=> {
      const arr = contact.map(item =>{
        if(item.id !== contactToEdit.id){
          return item
        }else{
          return contactToEdit
        }
      })
      setContact(arr)
      closeMod()
   }

  const handleAdd = (newObj)=> {
    const newContact = [...contact]
    newContact.push(newObj)
    setContact(newContact)
  }
  const delBtn =(id)=>{
    const newArr = contact.filter(item=>{
      return item.id !== id
    })
    setContact(newArr)

  }
  function closeMod(){
    setContactToEdit(null)
    handleClose()
  }
  return (
    <div>
     <Navbar />
     <AddContact handleAdd={handleAdd}/>
     <a href="#"><h2 id='h'>~Contacts List~</h2></a>
     <ContactList delBtn={delBtn} contact={contact} getContactToEdit={getContactToEdit}/>
      {contactToEdit ? (
      <ContactModal
      show={show}
      closeMod={closeMod}
      upDateContact={upDateContact}
      setContactToEdit={setContactToEdit}
      contactToEdit={contactToEdit}
      />): null}
    </div>
  );
}

export default App;
