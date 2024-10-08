import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useContactContext } from '../context/ContactContext'

const Contacts = () => {
    const { contacts } = useContactContext()
    const [displayPhoneNumber, setDisplayPhoneNumber] = useState()

    const handleDisplayPhoneNumber = () => {
      setDisplayPhoneNumber(displayPhoneNumber)
    }

  return (
    <Container>
      <h1>Your Contacts: </h1>
      {contacts.map(contact => (
        <div>
          <li>Name: {contact.name}</li>
          <button onClick={handleDisplayPhoneNumber}><li>Phone Number: {contact.phoneNumber}</li></button>
        </div>
      ))
    }
    </Container>
  )
}

export default Contacts