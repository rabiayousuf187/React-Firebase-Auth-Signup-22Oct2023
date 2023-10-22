import React, {useState} from "react";
import 

const ProductForm = () => {

  const [productName, setproductName] = useState("");
  const [productQty, setproductQty] = useState("");
  const [productPrice, setproductPrice] = useState("");
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter your productName:
            <input
              type="text"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your productQty:
            <input
              type="text"
              value={productQty}
              onChange={(e) => setproductQty(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your productPrice:
            <input
              type="text"
              value={productPrice}
              onChange={(e) => setproductPrice(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
