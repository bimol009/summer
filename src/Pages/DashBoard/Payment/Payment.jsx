import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTile/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutform";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Verify);
const Payment = () => {
  const [cart] = useCart();

  const { id } = useParams();
  const selectedClass = cart?.find((oneCart) => oneCart._id === id);
  const price = selectedClass ? selectedClass.price : 0;

  return (
    <div className="w-full">
      <SectionTitle heading={"PAYMENT"} />
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={selectedClass} price={price} id={id}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
