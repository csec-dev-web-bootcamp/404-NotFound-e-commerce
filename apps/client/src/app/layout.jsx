import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import Navbar from "../components/navbar";

import { cn } from "@app/client/lib/utils";
import { ThemeProvider } from "../components/ui/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "X-those",
  description: "Explore with X-those E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen min-w-10/12  flex flex-col mx-24  bg-backgrond font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex justify-center w-full  mx-auto flex-col items-center">
            {children}
          </div>
        </ThemeProvider>
        {/* <Navbar /> */}
      </body>
    </html>
  );
}
