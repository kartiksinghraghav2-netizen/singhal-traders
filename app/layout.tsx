import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:{default:"Singhal Traders Jaipur | Home Appliances & Electronics",template:"%s | Singhal Traders Jaipur"},description:"Explore home appliances and electronics at Singhal Traders, Jaipur. Browse product categories and featured brands Havells, USHA and atomberg. Request current prices and availability.",metadataBase:new URL("https://singhal-traders.vercel.app")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}