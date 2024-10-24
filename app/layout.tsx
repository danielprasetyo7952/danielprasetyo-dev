import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

{/* Components */}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialProfiles from "@/components/SocialProfiles";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Budi Prasetyo",
  description: "Enjoying life as a software engineer",
  icons: "logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className}`}>
        <div className="relative z-40" >
          <Header />
        </div>
        <div className="fixed top-0 z-50 left-0 ml-5 flex flex-col justify-center items-center gap-2 max-sm:hidden">
          <div className=' h-40 w-[1px] rounded-sm bg-white'>
          </div>
          <SocialProfiles />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
