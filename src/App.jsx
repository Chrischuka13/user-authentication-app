import './App.css'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import AuthRedirect from './components/AuthRedirect'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
        <>
        <Home/>
        </>
          
        }/>
        
        <Route path='/signup' element={<AuthRedirect><SignUp/></AuthRedirect>}/>
        <Route path='/login' element={<AuthRedirect><Login/></AuthRedirect>}/>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path='/verifymail/:token' element={<VerifyEmail/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/resetpassword/:token' element={<ResetPassword/>}/>

      </Routes>
    </>
  )
}

export default App
