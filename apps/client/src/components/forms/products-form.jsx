"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@app/client/components/ui/button";
import { Input } from "@app/client/components/ui/input";
import { Label } from "@app/client/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@app/client/components/ui/form";
import { Textarea } from "@app/client/components/ui/textarea";
import { createProduct } from "@app/client/data/products";
import { useState } from "react";
import Loader from "../loader/loading";
import useMutation from "@app/client/hooks/use-mutation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ArrowDownWideNarrow } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { ArrowBigUpDash } from "lucide-react";
import { ArrowDown01 } from "lucide-react";
import { ArrowDownIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { CATEGORIES, formatCategory } from "@app/client/lib/formatCategory";

const formSchema = z.object({
  name: z.string().min(2),
  description: z.string(),
  price: z.coerce.number().int().positive(),
  stockQuantity: z.coerce.number().int().positive(),
  category: z.string(),
  imgUrl: z.string(),
});

export default function ProductsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      stockQuantity: 1,
      category: "",
      description: "",
      imgUrl: "",
    },
  });

  const { isMutating, startMutation } = useMutation();

  const handleSubmit = async (values) => {
    console.log(values);
    startMutation(async () => {
      const data = await createProduct(values);
      if (data.error) {
        alert("error creating data");
      } else {
        alert("data created successfully");
      }
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="w-full p-6 border-[1px] border-slate-300 rounded-md my-10 shadow-lg">
        {isMutating && <p>Loading...</p>}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100"
                      placeholder="Enter the product name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="">
                    Select category for your product{" "}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem
                          key={category}
                          value={formatCategory(category)}
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-slate-100"
                      placeholder="Enter the price amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stockQuantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>stock Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-slate-100"
                      placeholder="Enter the price amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description about the product"
                      className="bg-slate-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>picture</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-slate-100"
                      placeholder="Enter the url of the image"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isMutating}
              type="submit"
              className="w-full bg-slate-950 hover:bg-slate-800"
            >
              Create Product
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex items-center flex-col gap-4 p-6 border-[1px] border-slate-300 rounded-md my-10 shadow-lg">
        <p className="text-2xl font-semibold">Your product Preview</p>
        {/* Your preview content here */}
      </div>
    </div>
  );
}
