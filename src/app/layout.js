
import "./globals.css";
import NavBar from "@/components/nav/nav";
import { LoraFont } from "@/lib/fonts";
import DataProvider from "./providers/data-provider";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const NotoBengali = Noto_Serif_Bengali({
//   subsets: ["bengali"],
//   weight: ["400", "500", "600", "700"],
// });

export const metadata = {
  title: "Foody",
  description: "Healthy Eating is an Important Part of Lifestyle",
};

export default async  function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light" >
      <body
        className={`${LoraFont.className}  antialiased bg-[#fff1e1] dark:bg-zinc-950 max-w-7xl mx-auto px-2 py-2 relative`}
      >
        <NavBar/>
        {children}

      </body>
    </html>
  );
}
