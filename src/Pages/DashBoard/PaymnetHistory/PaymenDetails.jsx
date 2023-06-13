import React, { useState, useEffect } from "react";


const PaymentDetails = ({ transactionId }) => {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await fetch(`/transaction/${transactionId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch transaction data");
        }
        const data = await response.json();
        const transaction = data.transaction;
        setTransaction(transaction);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
        // Handle error appropriately
      }
    };

    fetchTransactionData();
  }, [transactionId]);

  return (
    <div>
      {transaction ? (
        <div>
          <h2>Transaction Details:</h2>
          <p>Transaction ID: {transaction.id}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Payment Status: {transaction.status}</p>
          {/* Render other relevant transaction details */}
        </div>
      ) : (
        <p>Loading transaction details...</p>
      )}
    </div>
  );
};

export default PaymentDetails;
