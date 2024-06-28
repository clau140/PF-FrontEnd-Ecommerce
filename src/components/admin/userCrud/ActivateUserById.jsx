import React, { useState, useEffect } from 'react';

const localUrl = 'http://localhost:3001';

function ActivateUserById() {
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMesage] = useState('');

    const handleActivate = async () => {
        try {
            
            const response = await fetch(`${localUrl}/admin/user/activateuserbyid`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({user_id: id})
            });

            if (response.ok) {
                setSuccessMesage('Usuario desactivado exitosamente')
                setError('')
                return
            };

            const data = await response.json();

            if (data.cannotBanAdmin) {
                setError('No puedes desactivar a un admin')
                setSuccessMesage('')
                return
            };

            if (data.userNotFound) {
                setError('usuario no encontrado')
                setSuccessMesage('')
                return
            };

        } catch (error) {
            console.log(`error desactivando usuario: ${error}`);
            setError('Ha ocurrido un error')
            setSuccessMesage('');
        }
    };

    // JSX

};

export default ActivateUserById;
