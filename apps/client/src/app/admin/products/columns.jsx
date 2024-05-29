"use client";
import { MoreHorizontal, Delete, Edit } from "lucide-react";
import { Button } from "@app/client/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@app/client/components/ui/dropdown-menu";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteProduct } from "@app/client/data/products";

const handleEdit = (product) => {
  console.log("edit: ", product);
};
const handleDelete = (product) => {
  deleteProduct(product.id);
};
export const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stockQuantity",
    header: "Quantity",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => handleEdit(product)}
              className="flex items-center"
            >
              <MdEdit className="mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleDelete(product)}
              className="flex items-center text-red-600"
            >
              <MdDelete className="mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
