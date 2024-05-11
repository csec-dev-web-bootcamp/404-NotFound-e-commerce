import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CardsContainer from "./CardsContainer";
import Test from "./Test";

const ProductsCategory = () => {
  return (
    <div>
      <Tabs
        defaultValue="account"
        className="w-[800px]">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="email">email</TabsTrigger>
          <TabsTrigger value="user">user</TabsTrigger>
          <TabsTrigger value="active">active</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Test color={"bg-red-500"} />
        </TabsContent>
        <TabsContent value="password">
          <CardsContainer />
        </TabsContent>
        <TabsContent value="email">
          <Test color={"bg-green-500"} />
        </TabsContent>
        <TabsContent value="user">
          <Test color={"bg-slate-500"} />
        </TabsContent>
        <TabsContent value="active">
          <Test color={"bg-green-500"} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductsCategory;
