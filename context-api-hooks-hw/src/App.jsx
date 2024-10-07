import { useState } from 'react'
import ContactContext from './context/ContactContext'
import Contacts from './views/Contacts'

function App() {
  const [contact, setContact] = useState({
    name: '',
    phoneNumber: '',
  })

  return (
    <ContactContext.Provider value={{contact, setContact }}>
      <Contacts />
    </ContactContext.Provider>
  )
}

export default App
