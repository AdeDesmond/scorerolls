import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScoreRollLayout from "@/components/ScoreRollLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "scorerolls",
  description: "to fill in the results ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScoreRollLayout>{children}</ScoreRollLayout>
      </body>
    </html>
  );
}
