import { Routes, Route } from 'react-router-dom';

import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

function App() {
  
  return (
    <div>
    <Routes>
     <Route path='/' element={<Landing/>}/>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/Detail/:id' element={<Detail/>}/>
     <Route path='/SignIn' element={<SignIn/>}/>
     <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </div>
  )
}

export default App
