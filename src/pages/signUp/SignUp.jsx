import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'tailwindcss/tailwind.css';
import { signup } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

// import toast from 'react-toastify';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [ name, setName ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const userInfo = {}

  useEffect(() => {
    userInfo.name = name
    userInfo.lastname = lastname
    userInfo.email = email
    userInfo.password = password
    userInfo.confirmPassword = confirmPassword
  }, [ name, email, password, confirmPassword, lastname ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signup(userInfo))
    navigate("/SignIn")
  };

  return (
    <div title="Register - Ecommer App" className="flex justify-center items-center h-screen bg-gray-200">
      <div className="border-2 border-green-500 bg-white p-12 rounded-lg shadow-lg">
        <form onSubmit={ handleSubmit }>
          <h4 className="text-black text-center text-lg font-bold mb-8 tracking-wide">REGISTRARSE</h4>

          <div className="mb-3">
            <input
              type="text"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
              className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={ lastname }
              onChange={ (e) => setLastname(e.target.value) }
              className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
              placeholder="Enter Your LastName"
              required
              autoFocus
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
              className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={ confirmPassword }
              onChange={ (e) => setConfirmPassword(e.target.value) }
              className="mt-2 p-3 form-control placeholder-opacity-50 text-sm"
              placeholder="Enter Your Password"
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
