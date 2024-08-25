import "./Products.css";
import { SiBitcoin, SiEthereum, SiRipple } from "react-icons/si";

import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="products" id="products">
      <h2>Our Cryptos</h2>
      <div className="product__container wrapper">
        <div className="product__card">
          <SiBitcoin className="product__icon" />
          <h3>Bitcoin</h3>
          <span>$57229</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <SiEthereum className="product__icon" />
          <h3>Ethereum</h3>
          <span>$3023</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <SiRipple className="product__icon" />
          <h3>Ripple</h3>
          <span>$13,9</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
      </div>
      <div className="more__btn">
        <Link to="products" className="btn">
          SEE MORE
        </Link>
      </div>
    </section>
  );
}

export default Products;
