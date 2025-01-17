import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    // console.log(data);
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 19.4);
      console.log(data.total / 19.4);
    }
  };
  // console.log(products);
  useEffect(() => {
    fetchProduct();
  }, [page]);
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  return (
    <div>
      <div>
        {products.length > 0 && (
          <div className="products">
            {products.map((prod) => {
              return (
                <span key={prod.id} className="products__single">
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
              );
            })}
          </div>
        )}
        {products.length > 0 && (
          <div className="pagination">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ⬅️
            </span>
            {[...Array(totalPages)].map((_, i) => {
              return (
                <span
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                  key={i}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              onClick={() => selectPageHandler(page + 1)}
              className={page < totalPages ? "" : "pagination__disable"}
            >
              ➡️
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
