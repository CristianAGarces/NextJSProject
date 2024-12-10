import { comit, lusitana, montserrat } from "./ui/fonts";
import "./ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        {children}
        {/* <footer className={`py-10 flex justify-center items-center`}>
          Aprendiendo como se usa NextJS
        </footer> */}
      </body>
    </html>
  );
}
