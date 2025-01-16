import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="p-6">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
