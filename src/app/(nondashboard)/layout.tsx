import Navbar from "@/components/ui/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
        className={`h-full flex w-full flex-col`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
