import AdminCard from "@app/client/components/AdminCard";
import PageTitle from "@app/client/components/PageTitle";
import { Nav } from "@app/client/components/ui/nav";
import { Users } from "lucide-react";
import { Activity } from "lucide-react";
import { CreditCard } from "lucide-react";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  const cardData = [
    {
      label: "Available Products",
      amount: "952 products",
      route: "",
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
      route: "add-products",
      icon: Activity,
    },
  ];
  return (
    <div>
      <PageTitle title={"Product"} />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, i) => (
          <Link
            href={`/admin/products/${data.route}`}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
          >
            <AdminCard
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              amount={data.amount}
              icon={data.icon}
              label={data.label}
            />
          </Link>
        ))}
      </section>
      {children}
    </div>
  );
}
