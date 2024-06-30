import React, { useState } from 'react';

const localUrl = 'http://localhost:3001';

function DisableUserById() {
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMesage] = useState('');

    const handleSubmit = async () => {
        try {

            // completar URL
            const response = await fetch(`${localUrl}/admin/user/disableuserbyid`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({user_id: userId})
            });

            const data = await response.json();
            if (data.cannotBanAdmin) {
                setError('Np puedes desactivar a un usuario Admin.');
                setSuccessMesage('');
                return;
            };

            if (data.userNotFound) {
                setError('Usuario no encontrado')
                setSuccessMesage('')
                return;
            };

            setSuccessMesage(`usuario con id: ${userId} ha sido desactivado exitosamente`)
            setError('')

        } catch (error) {
            console.log(`error desactivando usuario: ${error}`);
            setError('Ha ocurrido un error')
            setSuccessMesage('')
        }
    };


    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-xs">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                    User ID
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="userId"
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
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


export default DisableUserById;
