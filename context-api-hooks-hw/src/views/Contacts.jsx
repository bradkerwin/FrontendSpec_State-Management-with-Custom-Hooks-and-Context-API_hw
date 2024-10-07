import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext'
import { Container } from 'react-bootstrap'

const Contacts = () => {
    const { contact } = useContext(ContactContext)

  return (
    <Container>
        <h1>Your Contacts: </h1>
        <li>{contact.name}</li>
        <li>{contact.phoneNumber}</li>
    </Container>
  )
}

export default Contacts