import React from "react";
import "tachyons";
import "./Product.css";

const Product = ({ id, title, img, onAddCounter }) => {
  return (
    // add dynamic prices
    <div className="Product">
      <article
        className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
        onClick={() => onAddCounter(id)}
      >
        <img src={img} className="db w-100 br2 br--top" alt={id} />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc tr">
              <h2 className="f5 mv0">$1000</h2>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">{title}</p>
        </div>
      </article>
    </div>
  );
};

export default Product;
