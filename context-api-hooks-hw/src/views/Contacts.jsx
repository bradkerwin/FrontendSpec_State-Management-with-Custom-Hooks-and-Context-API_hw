import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { useContactContext } from '../context/ContactContext'

const Contacts = () => {
    const { contacts } = useContactContext()

    const handleDisplayNumber = () => {
      {contacts.phoneNumber}
    }

  return (
    <Container>
      <h1>Your Contacts: </h1>
      {contacts.map(contact => (
        <div>
          <li className='name' onClick={handleDisplayNumber()}>{contact.name}</li>
          <li>{contact.phoneNumber}</li>
        </div>
      ))
    }
    </Container>
  )
}

export default Contacts