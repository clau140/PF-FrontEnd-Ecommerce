import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react'

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [ processing, setProcessing ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ succeeded, setSucceeded ] = useState(false);
    const token = localStorage.getItem("token");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        try {
            const { data } = await axios.post(
                'http://localhost:3001/payment/stripeIntent',
                {
                    amount: 1000,
                    orderId: "order-id-123"  // el monto en centavos
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Añade el token de autorización en los encabezados
                    }
                }
            );
            const payload = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });
            if (payload.error) {
                setError(`Pago fallido: ${payload.error.message}`);
                setProcessing(false);
            } else {
                setError(null);
                setProcessing(false);
                setSucceeded(true);
            }
        } catch (error) {
            setError(`Error: ${error.message}`);
            setProcessing(false);
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <CardElement />
            <button disabled={ processing || succeeded }>Pagar</button>
            { error && <div>{ error }</div> }
            { succeeded && <div>Pago exitoso!</div> }
        </form>
    );
}

export default Checkout

