import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { useContactContext } from '../context/ContactContext'

const Contacts = () => {
    const { contacts } = useContactContext()

  return (
    <Container>
      <h1>Your Contacts: </h1>
      {contacts.map(contact => (
        <div>
          <li>{contact.name}</li>
          <li>{contact.phoneNumber}</li>
        </div>
      ))
    }
    </Container>
  )
}

export default Contacts