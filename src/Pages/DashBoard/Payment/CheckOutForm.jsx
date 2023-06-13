import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import "./CheckOutForm.css";

const CheckOutForm = ({ cart, price,id }) => {
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
      axiosSecure.post(`/create-payment-intent/${id}`, { price }).then((res) => {

        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, id, price]);

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

      setProcessing(false);
      if (paymentIntent.status === "succeeded") {
        const transactionId = paymentIntent.id;
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
         
          date: new Date(),
          ordeStutas: "Service Pending",
          quantity: cart.length,
          cartItems: id,
          name:cart.name,
          // menuItems: cart.map((item) => item.itemId),
          // itemNames: cart.map((item) => item.name),
        };
        axiosSecure.post(`/payments/${id}`, payment).then((res) => {
   
          if (res.data.result.insertedId) {
            <h2>swet alert</h2>;
          }
        });
      }
    }
  };

  return (
    <div>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
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
        <button
          className="btn btn-outline btn-primary btn-sm my-2"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-error ml-28 my-5">{cardError}</p>}

      {transactionId && (
        <p className="text-primary ml-28 my-5">
          Success with transaction Id:{" "}
          <span className="font-bold">{transactionId}</span>
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
