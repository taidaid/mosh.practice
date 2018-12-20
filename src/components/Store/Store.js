import React from "react";
import "./Store.css";
import "tachyons";
import Product from "../Product/Product";

const Store = ({ products, onAddCounter }) => {
  return products === "Loading" ? (
    <article>
      <h2 className="f3 fw4 pa3 mv0">Store</h2>
      <div className="cf pa2">
        <div className="Store">{products}</div>
      </div>
    </article>
  ) : (
    <article>
      <h2 className="f3 fw4 pa3 mv0">Store</h2>
      <div className="cf pa2">
        <div className="Store">
          {products.map(product => {
            return (
              <React.Fragment>
                <Product
                  key={product.id}
                  id={product.id}
                  onAddCounter={onAddCounter}
                  title={product.title}
                  img={product.img}
                  // price={product.price}
                  // alt={product.alt}
                />
                <br />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Store;
