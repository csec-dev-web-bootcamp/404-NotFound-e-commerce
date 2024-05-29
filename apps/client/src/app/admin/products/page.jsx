import PageTitle from "@app/client/components/PageTitle";

import React from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "@app/client/components/DataTable";
import { getManyProducts } from "@app/client/data/products";

export default async function Products() {
  const data = await getManyProducts();
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="All products" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
