import React from "react";
import SideNav from "./SideNav";

export default function ScoreRollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-[85rem] bg-gray-200 mx-auto min-h-[40rem] rounded-xl shadow-lg overflow-hidden flex mt-6">
      <SideNav />
      {children}
    </main>
  );
}
