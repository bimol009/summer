import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ElementsConsumer } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Verify);
import { useState } from 'react';

const Payment = () => {
  const [cart] = useCart();
  const [selectedItemPrice, setSelectedItemPrice] = useState(0); // State to store the selected item price

  // Function to handle the enroll button click
  const handleEnroll = (price) => {
    setSelectedItemPrice(price);
  };

  return (
    <div className="w-full">
      <SectionTitle heading={"PAYMENT"} />

      {/* Render the cart items and provide a way to enroll */}
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <button onClick={() => handleEnroll(item.price)}>Enroll</button>
          </div>
        ))}
      </div>

      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={selectedItemPrice}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
