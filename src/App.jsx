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
import PaySuccess from './components/paysuccess/PaySuccess';
import PayCancel from './components/payCancel/PayCancel.jsx';
import CartPage from './pages/cartPage/CartPage.jsx';
import { AuthContextProvider } from './components/context/authContex.jsx';

function App() {
  const { pathname } = useLocation();

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
          <Route path='/paySuccess' element={ <PaySuccess /> } />
          <Route path='/payCancel' element={ <PayCancel /> } />
          <Route path='/cartPage' element={ <CartPage /> } />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
