import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckOutForm = () => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const price = {
        price: 200
    }


    useEffect(() => {

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(price),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name:'Laizu Akram',
                        email:'laizuakram98@gmail.com'
                    },
                },
            },
        );
        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        if(paymentIntent.status === "succeeded"){
            setSuccess(`Congrats!$ ${paymentIntent.amount} payment successfull.`)
            setTransactionId(paymentIntent.id)
            setProcessing(false)
        } 
        console.log(paymentIntent);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-red-500 mt-2'>{cardError}</p>
            <button className='btn btn-sm btn-warning mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
               
               {
                success && <div>
                    <p className='text-green-400'>{success}</p>
                    <p>{transactionId}</p>
                </div>
               }

        </form>
    );
};

export default CheckOutForm;