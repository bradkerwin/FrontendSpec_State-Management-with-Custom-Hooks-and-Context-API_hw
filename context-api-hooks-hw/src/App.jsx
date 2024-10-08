import Contacts from './views/Contacts'
import { ContactProvider } from './context/ContactContext'

function App() {

  return (
    <ContactProvider>
      <Contacts />
    </ContactProvider>
  )
}

export default App
