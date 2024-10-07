import React, { createContext, useState } from 'react'

const ContactContext = createContext({
    contact: {
        name: '',
        phoneNumber: '',
    },

    setContact: () => {}
})

const [contacts, setContacts] = useState([
    {
        name: "Billie Joe Armstrong",
        phoneNumber: "111-111-1111"
    },

    {
        name: "Mike Dirnt",
        phoneNumber: "222-222-2222"
    },

    {
        name: "Tre Cool",
        phoneNumber: "333-333-3333"
    }
])

export default ContactContext; contacts; setContacts; 