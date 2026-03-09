import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "松本AIコンサル | 中小企業のAI導入支援",
  description: "御社のボトルネックをAIで解消します。経営者の「困っている」をヒアリングし、最適なAIソリューションを開発・導入。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
