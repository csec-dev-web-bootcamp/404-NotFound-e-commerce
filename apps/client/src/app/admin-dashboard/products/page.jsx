import AdminCard from "@app/client/components/AdminCard";
import PageTitle from "@app/client/components/PageTitle";
import { Users } from "lucide-react";
import { Activity } from "lucide-react";
import { CreditCard } from "lucide-react";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Products() {
  const cardData = [
    {
      label: "Available Products",
      amount: "952 products",
      route: "available-products",
      icon: DollarSign,
    },
    {
      label: "Stock Products",
      amount: "350",
      route: "stock-products",
      icon: Users,
    },
    {
      label: "Sold products",
      amount: "234",
      route: "sold-products",
      icon: CreditCard,
    },
    {
      label: "Add New Products",
      amount: "New",
      route: "add-product",
      icon: Activity,
    },
  ];
  return <div>Available products list will be here at the bottom</div>;
}