import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import HomeUpdate from './pages/UpdateUser';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Router>
          <Routes>
              <Route path='/' element={<Navigate to='/signin' />} />
              <Route path='/home' element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/login' element={<Login />} />
              <Route path='/updateuser' element={<HomeUpdate />} />
          </Routes>
      </Router>
    </div>
  )
  
}

export default App
