'use client'; 
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const signup = usePathname();

  const shouldShowNavbar = signup !== "/signup" && signup !== "/login";
  const shouldShowFooter = signup !== "/signup" && signup !== "/login";

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      
      <body className={inter.className} suppressHydrationWarning>
        {shouldShowNavbar && (
          <div className="relative w-full flex items-center justify-center">
            <Navbar />
          </div>
        )}
        {children}
        {shouldShowFooter && <Footer />}  
        </body>
    </html>
  );
}
