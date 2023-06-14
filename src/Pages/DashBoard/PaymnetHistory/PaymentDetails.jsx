import React from "react";
import { Helmet } from "react-helmet-async";
import useInstaFind from "../../../hooks/useInstaFind";

const PaymentDetails = () => {
  const [instaFind] = useInstaFind();

  // Sort the payment history in descending order based on transaction date
  const sortedInstaFind = instaFind.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
       <Helmet>
          <title>Academy of Dance | History</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {sortedInstaFind.map((ista, index) => (
              <tr key={ista._id}>
                <th>{index + 1}</th>
                <th>{ista.transactionId}</th>
                <td>${ista.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
