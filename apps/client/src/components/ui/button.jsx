import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@app/client/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // add in normal variant the hover effect like dark background to the Button
        normal: "outline-none hover:bg-dark hover:border rounded-full",

        // normal: "outline-none hover:outline ",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cartBtn:
          "bg-transparent text-black border-2 border-slate-800 hover:bg-slate-800  hover:text-white",
      },
      display: {
        default: "none",
        center: "flex items-center justify-center",
      },
      font: {
        default: "text-md",
        xl: "text-xl",
        highXl: "text-3xl",
      },
      size: {
        default: "h-10 px-4 py-1.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 p-1",
        smicon: "h-7 w-7",
      },
      rounded: {
        default: "rounded-sm",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "default",
      variant: "default",
      size: "default",
      font: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    { className, variant, size, rounded, font, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded, font, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
