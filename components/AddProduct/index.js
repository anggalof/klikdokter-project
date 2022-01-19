import React, { useState, useRef } from "react";
import ModalProduct from "../ModalProduct";

const AddProduct = () => {
  const [current, setCurrent] = useState("");
  const modal = useRef(null);

  const openForm = (val) => {
    setCurrent(val);
    return modal.current.open();
  };

  return (
    <div className="btn-wrapper">
      <button
        className="btn-add-product"
        onClick={() => openForm("Add Product")}
      >
        Add Product
      </button>
      <ModalProduct modal={modal} current={current} />
    </div>
  );
};

export default AddProduct;
