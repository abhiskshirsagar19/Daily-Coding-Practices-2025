document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  let products = [];
  let page = 1;

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");

      const data = await res.json();
      if (data && data.products) {
        products = data.products;
        console.log(products);
        render();
      }
    } catch (error) {
      console.log("Error fetching the products");
    }
  };
  const render = () => {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");
    const pagination = document.createElement("div");
    pagination.classList.add("pagination");
    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((prod) => {
        const productElement = document.createElement("div");
        productElement.classList.add("products_single");
        productElement.innerHTML = `
        <img src="${prod.thumbnail}" lat ="${prod.title}"/> <span>${prod.title}</span>`;

        productsContainer.appendChild(productElement);
      });

      if (page >= 1) {
        const prevButton = createPaginationButton("⏪", () => {
          selectPageHandler(page - 1);
        });
        pagination.appendChild(prevButton);
      }
      for (let i = 0; i < products.length / 10; i++) {
        const pageButton = createPaginationButton(
          i + 1,
          () => {
            selectPageHandler(page + 1);
          },
          page === i + 1
        );
        pagination.appendChild(pageButton);
      }
      if (page < products.length / 10) {
        const nextButton = createPaginationButton("⏩", () => {
          selectPageHandler(page + 1);
        });
        pagination.appendChild(nextButton);
      }
    }
    app.innerHTML = "";
    app.appendChild(productsContainer);
    app.appendChild(pagination);
  };

  const createPaginationButton = (text, clickHandler, isSelected = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    if (isSelected) {
      button.classList.add("pagination_selected");
    }
    return button;
  };
  const selectPageHandler = (selectPage) => {
    if (
      selectPage >= 1 &&
      selectPage <= products.length / 10 &&
      selectPage !== page
    ) {
      page = selectPage;
      render();
    }
  };
  fetchProducts();
});
