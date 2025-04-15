import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constance";

const vazirmatn = Vazirmatn({
  variable: "--font-vazir-sans",
  subsets: ["arabic"],
});



export const metadata: Metadata = {
  title: {
    template: `${APP_NAME} | %s`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
  icons: {
    icon: '/assets/images/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
