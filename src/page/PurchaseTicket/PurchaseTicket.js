import React from "react";
import { useParams } from "react-router-dom";

export default function PurchaseTicket() {
  let param = useParams();
  console.log(param);
  return <div>PurchaseTicket</div>;
}
