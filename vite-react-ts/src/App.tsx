import { ReactNode } from 'react'
import Home from './components/pages/Home.tsx'
import './styles/App.css'
import { UserContextProvider } from './context/UserContext.tsx'

const App = (): ReactNode => {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  )
}

export default App
