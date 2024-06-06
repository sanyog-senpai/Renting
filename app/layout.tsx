import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Poppins } from "@next/font/google"
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900",],
  variable: '--font-poppins'
})
interface Props {
  children: any;
}

export const metadata: Metadata = {
  title: "Rent Commerce",
  description: "Buy, Sell and Rent",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main className={`${poppins.className} app`}>
          <StoreProvider>
            <Nav />
            {children}
            <Footer />
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
