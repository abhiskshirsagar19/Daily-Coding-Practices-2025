import React from "react";

export default function Header() {
  return (
    <nav className="h-5 flex justify-between">
      <h2 className="text-2xl font-mono">AK Store</h2>
      <input
        type="text"
        placeholder="Search a product......."
        className="p-2"
      />
    </nav>
  );
}
