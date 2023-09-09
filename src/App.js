import "./styles.css";
import { useState } from "react";
import ImageSlider from "./ImgSlider";

export default function App() {
  const [counter, setCounter] = useState(0);

  const images = [
    { key: 1, bannerCode: "../images/image-product-1.jpg" },
    { key: 2, bannerCode: "../images/image-product-2.jpg" },
    { key: 3, bannerCode: "../images/image-product-3.jpg" },
    { key: 4, bannerCode: "../images/image-product-4.jpg" }
  ];

  return (
    <section className="Container">
      <header className="Header">
        <img className="MenuMobile" src="../images/icon-menu.svg" alt="Logo" />
        <img
          id="Logo"
          src="../images/logo.svg"
          alt="Logo"
          width="150"
          height="20"
        />
        <nav className="Menu">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="AvatarCart">
          <img
            id="Cart"
            src="../images/icon-cart.svg"
            alt="Cart"
            width="20"
            height="20"
          />
          <img
            id="Avatar"
            src="../images/image-avatar.png"
            alt="Avatar"
            width="50"
          />
        </div>
      </header>
      <main className="Content">
        <ImageSlider images={images} />
        <section className="ProductDesc">
          <h3 className="ProductDescTitle">SNEAKER COMPANY</h3>
          <h1 className="ProductMainTitle">Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <article className="Price">
            <p>$125.00</p>
            <p>50%</p>
          </article>
          <article className="ProductCount">
            <article className="ProductCounter">
              <button
                onClick={() => {
                  setCounter((prev) => {
                    if (prev <= 0) {
                      return 0;
                    }
                    return prev - 1;
                  });
                }}
                className="ProductCounterButton"
              >
                -
              </button>
              <p>{counter}</p>
              <button
                onClick={() => setCounter((prev) => prev + 1)}
                className="ProductCounterButton"
              >
                +
              </button>
            </article>
            <div className="ProductCartButton">
              <p>Add to Cart</p>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
}
