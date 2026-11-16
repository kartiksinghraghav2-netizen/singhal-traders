import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Singhal Traders | Home Appliances & Electronics",
  description: "Explore air conditioners, refrigerators, washing machines, irons and everyday home appliances. Enquire directly with Singhal Traders.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}