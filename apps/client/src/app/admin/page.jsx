import AdminCard, { CardContent } from "@app/client/components/AdminCard";
import BarChart from "@app/client/components/BarChart";
import PageTitle from "@app/client/components/PageTitle";
import SalesCard from "@app/client/components/SalesCard";
import { DollarSign, Users, Activity, CreditCard } from "lucide-react";
import React from "react";

export default function AdminHome() {
  const cardData = [
    {
      label: "Total Revenue",
      amount: "$952,232.53",
      description: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      description: "+180.1% from last month",
      icon: Users,
    },
    {
      label: "Sales",
      amount: "+12,234",
      description: "+19% from last month",
      icon: CreditCard,
    },
    {
      label: "Active Now",
      amount: "+573",
      description: "+201% since last hour",
      icon: Activity,
    },
  ];
  const userSalesData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Charlie Lee",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$39.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      saleAmount: "+$299.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      saleAmount: "+$39.00",
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title={"Dashboard"} />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, i) => (
          <AdminCard
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
            amount={data.amount}
            description={data.description}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="font-semibold p-4">Overwiew</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p className="font-semibold">Recent Sales</p>
            <p className="px-4 text-sm text-gray-400">
              You made 256 sales this month.
            </p>
          </section>
          {userSalesData.map((data, i) => (
            <SalesCard
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              name={data.name}
              email={data.email}
              saleAmount={data.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
