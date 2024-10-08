import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useContactContext } from '../context/ContactContext'

const Contacts = () => {
    const { contacts, selectedContact, setSelectedContact } = useContactContext()

    const handleSelectedContact = (contact) => {
      setSelectedContact(contact)
    }

  return (
    <Container>
      <h1>Your Contacts: </h1>
      {contacts.map(contact => (
        <div>
          <li>Name: <button onClick={() => handleSelectedContact(contact)}>{contact.name}</button></li>
          {selectedContact && selectedContact.name === contact.name && <li>Phone Number: {selectedContact.phoneNumber}</li>}
        </div>
      ))
    }
    </Container>
  )
}

export default Contacts