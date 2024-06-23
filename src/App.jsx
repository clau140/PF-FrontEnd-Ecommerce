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



function App() {
  const { pathname} = useLocation();
  
  return (
    <div>
       { pathname !== '/' && <Navbar/>}
    <Routes>
     <Route path='/' element={<Landing/>}/>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/Detail/:id' element={<Detail/>}/>
     <Route path='/SignIn' element={<SignIn/>}/>
     <Route path='/SignUp' element={<SignUp/>}/>
     <Route path='/ForgotPassword' element={<ForgotPassword />}/>
     <Route path='/Profile' element={<ProfilePage/>}/>
     <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
    </div>
  )
}

export default App
