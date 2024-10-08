import React, { createContext, useState, useContext } from 'react'

const ContactContext = createContext()

export const ContactProvider = ({children}) => {
    const [contacts, setContacts] = useState(
        [
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
        ],
    )
    const [selectedContact, setSelectedContact] = useState(null)
    return (
        <ContactContext.Provider value={{selectedContact, setSelectedContact, contacts}}>
            {children}
        </ContactContext.Provider>
    )
}


export const useContactContext = () => useContext(ContactContext)