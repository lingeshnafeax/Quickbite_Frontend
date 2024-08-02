/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import LoadingIcons from "react-loading-icons";
const Verify = () => {
  const [paymentStatus, setPaymentStatus] = useState("Payment pending");
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const handlePaymentStatus = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/order/verifyPayment`,
        {
          success,
          orderId,
        },
      );

      if (response.data.success) {
        setPaymentStatus("Payment succesful");
      } else {
        setPaymentStatus("Payment not succesful");
      }
    } catch (err) {
      setPaymentStatus("Payment not succesful");
      console.log("Payment not succesful", err);
    }
  };

  let paymentOutput;
  switch (paymentStatus) {
    case "Payment pending":
      paymentOutput = (
        <LoadingIcons.BallTriangle height={300} width={300} stroke="#f97316" />
      );
      break;
    case "Payment succesful": {
      paymentOutput = (
        <LoadingIcons.Hearts height={300} width={300} stroke="#f97316" />
      );
      break;
    }
    case "Payment not succesful": {
      paymentOutput = (
        <LoadingIcons.Puff height={300} width={300} stroke="#f97316" />
      );
      break;
    }
  }

  useEffect(() => {
    handlePaymentStatus();
  }, [success, orderId]);
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-evenly">
      <div> {paymentOutput}</div>
      <p className="text-2xl font-bold lg:mt-12 lg:text-4xl">{paymentStatus}</p>
      <div className="m-10 flex flex-col gap-x-6 text-center lg:flex-row lg:gap-y-6">
        {paymentStatus === "Payment succesful" && (
          <Link
            to="/orders"
            className="rounded-md bg-primary px-4 py-2 text-white"
          >
            View Orders
          </Link>
        )}
        <Link to="/" className="rounded-md bg-primary px-4 py-2 text-white">
          Shop More
        </Link>
      </div>
    </div>
  );
};

export default Verify;
