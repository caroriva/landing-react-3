import "./Products.css";
import cryptoList from "../../cryptoList";
import { useState } from "react";

function Products() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [filter, setFilter] = useState("All");

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const filteredCryptoList =
    filter === "All"
      ? cryptoList
      : cryptoList.filter((crypto) => crypto.category === filter);

  const hasMoreProducts = visibleCount < filteredCryptoList.length;

  const categories = ["All", "Stablecoins", "Altcoins", "Memecoins"];

  return (
    <section className="products" id="products">
      <h2>buy your crypto</h2>
      <div className="filter__buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product__container wrapper">
        {filteredCryptoList.slice(0, visibleCount).map((product) => (
          <div className="product__card" key={product.id}>
            <div className="product__icon">
              <product.icon />
            </div>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
            <a href="#" className="btn">
              Buy It Now
            </a>
          </div>
        ))}
      </div>
      {hasMoreProducts && (
        <div className="more__btn">
          <button onClick={loadMore} className="btn alt__btn">
            SEE MORE
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
