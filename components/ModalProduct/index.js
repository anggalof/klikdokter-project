import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAddProduct,
  fetchUpdateProduct,
  fetchProductBySku,
} from "../../common";
import Modal from "../Modal";

const initialState = {
  sku: "",
  productname: "",
  qty: 0,
  price: 0,
  unit: "",
  status: 0,
};
const ModalProduct = (props) => {
  const [loading, setLoading] = useState(false);
  const [{ sku, productname, qty, price, unit, status }, setState] =
    useState(initialState);
  const productBySku = useSelector((state) => state.productBySku.productBySku);
  const dispatch = useDispatch();
  const { current, modal, productId } = props;

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductBySku({ sku: productId }));
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      sku,
      product_name: productname,
      qty,
      price,
      unit,
      status,
    };
    setLoading(true);
    if (current === "Add Product") {
      dispatch(fetchAddProduct(payload));
    }
    if (current === "Update Product") {
      dispatch(fetchUpdateProduct(payload, productId));
    }
  };
  return (
    <Modal ref={modal}>
      <form name="sentVal" validate="true" onSubmit={handleSubmit}>
        <div className="modal-wrapper">
          <div className="modal-container">
            <div className="modal-input">
              <span>SKU</span>
              <input
                type="name"
                name="sku"
                defaultValue={productBySku ? productBySku.sku : ""}
                onChange={handleChange}
              />
            </div>
            <div className="modal-input">
              <span>Product Name</span>
              <input
                type="name"
                name="productname"
                defaultValue={productBySku ? productBySku.product_name : ""}
                onChange={handleChange}
              />
            </div>
            <div className="modal-input">
              <span>Qty</span>
              <input
                type="name"
                name="qty"
                defaultValue={productBySku ? productBySku.qty : ""}
                onChange={handleChange}
              />
            </div>
            <div className="modal-input">
              <span>Price</span>
              <input
                type="name"
                name="price"
                defaultValue={productBySku ? productBySku.price : ""}
                onChange={handleChange}
              />
            </div>
            <div className="modal-input">
              <span>Unit</span>
              <input
                type="name"
                name="unit"
                defaultValue={productBySku ? productBySku.unit : ""}
                onChange={handleChange}
              />
            </div>
            <div className="modal-input">
              <span>Status</span>
              <input
                type="name"
                name="status"
                defaultValue={productBySku ? productBySku.status : ""}
                onChange={handleChange}
              />
            </div>
            <div className="modal-button">
              <button>{loading ? "Loading..." : current}</button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ModalProduct;
