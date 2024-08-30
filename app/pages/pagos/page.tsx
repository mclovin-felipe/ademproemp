"use client";
import { useState, FormEvent } from "react";

const PaymentForm: React.FC = () => {
  const [buyOrder, setBuyOrder] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [amount, setAmount] = useState("");
  const [returnUrl, setReturnUrl] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/transbank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ buyOrder, sessionId, amount, returnUrl }),
    });

    const data = await response.json();
    if (response.ok) {
      // Redirige al usuario a la URL de WebpayPlus
      window.location.href = data.url;
    } else {
      console.error("Error:", data.error);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center h-screen"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Buy Order"
        value={buyOrder}
        onChange={(e) => setBuyOrder(e.target.value)}
      />
      <input
        type="text"
        placeholder="Session ID"
        value={sessionId}
        onChange={(e) => setSessionId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Return URL"
        value={returnUrl}
        onChange={(e) => setReturnUrl(e.target.value)}
      />
      <button type="submit">Pay</button>
      <form
        method="post"
        action="https://webpay3gint.transbank.cl/webpayserver/initTransaction"
      >
        <input
          //   type="hidden"
          name="token_ws"
          value="01ab0058e6f3303c115cc9fcbd1e4825f7d0fed05c6277529257eb3d62c3f990"
        />
        <input type="submit" value="Ir a pagar" />
      </form>
    </form>
  );
};

export default PaymentForm;
