import React, { useState } from "react";
import { ShoppingCartState } from "../context/context";

export default function Home() {
  const [page, setPage] = useState(1);
  const {
    state: { products },
  } = ShoppingCartState();
  return (
    <div>
      <div>
        {/* Filter */}
        {/* Products */}
      </div>
    </div>
  );
}
