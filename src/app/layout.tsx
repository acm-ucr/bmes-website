import "./globals.css";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BMES Website",
  description: "Biomedical Engineering Society at UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
