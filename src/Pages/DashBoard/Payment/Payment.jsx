import { ElementsConsumer } from "@stripe/react-stripe-js";

import SectionTitle from "../../../Components/SectionTile/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//TODO: Provide Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Verify);
const Payment = () => {
  const [cart] = useCart();
  const total = cart?.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full">
      <SectionTitle heading={"PAYMENT"} />
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
