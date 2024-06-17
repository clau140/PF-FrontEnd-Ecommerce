import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

// import toast from 'react-toastify';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [answer, setAnswer] = useState('');
//   const navigate = useNavigate();

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
        <h4 className="text-black text-center text-lg font-bold mb-8 tracking-wide">REGISTRARSE</h4>
  
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
  
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
            className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
            placeholder="Enter Your Password"
            required
          />
        </div>
  
        <div className="mb-3">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
            placeholder="Enter Your Password"
            required
          />
        </div>
  
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
            placeholder="What is your favorite Sport?"
            required
          />
        </div>
  
        <button type="submit" className="border-2 border-green-500 text-black mt-8 p-2 mx-auto block rounded-md
        hover:bg-green-500 hover:text-white
        transform hover:scale-110 transition duration-200">
          REGISTRAR
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default SignUp;
