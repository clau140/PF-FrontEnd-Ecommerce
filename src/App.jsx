import { Routes, Route, useLocation } from 'react-router-dom';

import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import ProfilePage from './pages/profilepage/ProfilePage';
import Navbar from '../src/components/navbar/Navbar';
import Favorites from './pages/favorites/Favorites';
import ForgotPassword from './pages/Forgot Password/ForgotPassword';

import { AuthContextProvider } from './components/context/authContex.jsx';
import CartPage from './pages/cartPage/CartPage.jsx';
// import PaySuccess from './components/paysuccess/PaySuccess.jsx';
// import PayCancel from './components/payCancel/PayCancel.jsx';


function App() {
  const { pathname} = useLocation();
  
  return (
    <div>
      { pathname !== '/' && <Navbar /> }
      <AuthContextProvider>
        
        <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/Home' element={ <Home /> } />
          <Route path='/Detail/:id' element={ <Detail /> } />
          <Route path='/SignIn' element={ <SignIn /> } />
          <Route path='/SignUp' element={ <SignUp /> } />
          <Route path='/ForgotPassword' element={ <ForgotPassword /> } />
          <Route path='/Profile' element={ <ProfilePage /> } />
          <Route path='/favorites' element={ <Favorites /> } />
          <Route path='/cartPage' element={ <CartPage /> } />
          {/* <Route path="/paySuccess" element={ <PaySuccess /> } />
          <Route path="/payCancel" element={ <PayCancel /> } /> */}
          {/* <Route path='/disableuserbyid' element={ < DisableUserById /> } />
          < Route path='/disableuserbyemail' element={ < DisableUserByEmail /> } />
          < Route path='/allusers' element={ < ViewUsers /> } />
          < Route path='/createadmin' element={ < CreateAdminUser /> } />
          < Route path='/activateuserbyemail' element={ < ActivateUserByEmail /> } />
          < Route path='/emailallusers' element={ < EmailAllUsers /> } /> */}

        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
