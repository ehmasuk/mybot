import Authprovider from "@/providers/Authprovider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MYBOT",
  description: "Your personal assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Authprovider>
          <AntdRegistry>{children}</AntdRegistry>
        </Authprovider>
      </body>
    </html>
  );
}
