import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import './CheckOutForm.css';

const CheckOutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
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
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (paymentError) {
      console.log(paymentError);
    } else {
      console.log(paymentIntent);
      setProcessing(false);
      if (paymentIntent.status === "succeeded") {
        const transactionId = paymentIntent.id;
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          date: new Date(),
          orderStatus: 'Service Pending',
          quantity: cart.length,
          cartItems: cart.map(item => item._id),
          menuItems: cart.map(item => item.menuItemId),
          itemNames: cart.map(item => item.name)
        };
        axiosSecure.post('/payments', payment)
          .then(res => {
            console.log(res.data);
            if (res.data.result.insertedId) {
              // Show success message or redirect
            }
          });
      }
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="card-element">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <button
            className="checkout-button"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Payment
          </button>
        </form>
        {cardError && <p className="checkout-error">{cardError}</p>}
        {transactionId && (
          <p className="checkout-success">
            Success with transaction Id:{" "}
            <span className="checkout-success-id">{transactionId}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckOutForm;
