import React, { useState } from 'react';

const localUrl = 'http://localhost:3001';

function DisableUserByEmail() {
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMesage] = useState('');

    const handleSubmit = async () => {
        try {
            
            // complear URL
            const response = await fetch(`${localUrl}/admin/user/disableuserbyemail`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({email: userEmail}) // email
            });

            if (response.status === 403) {
                setError('No estas autorizado para realizar esta operacion ni desactivar a otro admin')
                setSuccessMesage('')
                return
            }
 
            const data = await response.json();

            if (data.userAlreadyDisabled) {
                setError('Usuario ya ha sido desactivado')
                setSuccessMesage('')
                return
            }

            if (data.userNotFound) {
            setError(`usuario con email: ${userEmail} no existe`)
            return
            }

            if (data.cannotBanAdmin) {
                setError('no puedes desactivar a un usuario admin.')
                return
            }

            setSuccessMesage(`Usuario con email: ${userEmail} desactivado con exito`)
            setError('')

        } catch (error) {
            console.log(`error desactivando usuario por email: ${error}`);
            setError('Ha ocurrido un error')
            setSuccessMesage('')
        }
    };

    // JSX
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-xs">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
                    User Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="userEmail"
                    type="email"
                    placeholder="Enter User Email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={handleSubmit}
                >
                    Disable User
                </button>
                {error && (
                    <div className="mt-4 p-4 bg-red-200 text-red-800 rounded">
                        {error}
                    </div>
                )}
                {successMessage && (
                    <div className="mt-4 p-4 bg-green-200 text-green-800 rounded">
                        {successMessage}
                    </div>
                )}
            </div>
        </div>
    );

};

export default DisableUserByEmail;