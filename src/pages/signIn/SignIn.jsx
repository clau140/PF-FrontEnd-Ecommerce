import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

// import toast from 'react-toastify';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/v1/auth/register', {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         answer,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate('/login');
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error('Something went wrong');
//     }
//   };

  return (
    <div title="Register - Ecommer App" className="flex justify-center items-center h-screen bg-gray-200">
    <div className="border-2 border-green-500 bg-white p-12 rounded-lg shadow-lg">
      <form>
        <h4 className="text-black text-center text-lg font-bold mb-8 tracking-wide">INICIO DE SESIÓN</h4>
  
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
            placeholder="Enter Your Email"
            required
          />
        </div>
  
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 p-3 form-control placeholder-opacity-50 text-sm bg-gray-300"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <div className="mt-8 text-center text-gray-500 hover:text-black text-sm">
              <a href='/ForgotPassword'>Contraseña Olvidada?</a>
          </div>
  
        <button type="submit" className="border-2 border-green-500 text-black mt-8 p-2 mx-auto block rounded-md
        hover:bg-green-500 hover:text-white
        transform hover:scale-110 transition duration-200">
          INGRESAR
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default SignIn;
