import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ModalProduct from "../ModalProduct";
import { isEmpty } from "../../utils/formatter/isEmpty";
import { fetchDeleteProduct } from "../../common";

const TableProducts = (props) => {
  const [current, setCurrent] = useState("");
  const [sku, setSku] = useState("");
  const { services, service } = props;
  const modal = useRef(null);
  const dispatch = useDispatch();

  const openForm = (val, key) => {
    setCurrent(val);
    setSku(key);
    return modal.current.open();
  };

  const handleDelete = (id) => {
    dispatch(fetchDeleteProduct(id));
  };

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>PRODUCT NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(service) ? (
            <>
              {service.data === null ? (
                <tr>
                  <td colSpan={3} className="center">
                    Data not found, please try again with key that right
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>{service.sku}</td>
                  <td>{service.product_name}</td>
                  <td>
                    <span
                      onClick={() => openForm("Update Product", service.sku)}
                    >
                      Edit
                    </span>
                    <span> | </span>
                    <span onClick={handleDelete(service.sku)}>Delete</span>
                  </td>
                </tr>
              )}
            </>
          ) : (
            <>
              {services &&
                services.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.sku}</td>
                      <td>{item.product_name}</td>
                      <td>
                        <span
                          onClick={() => openForm("Update Product", item.sku)}
                        >
                          Edit
                        </span>
                        <span> | </span>
                        <span onClick={() => handleDelete(item.sku)}>
                          Delete
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </>
          )}
        </tbody>
      </table>
      <ModalProduct modal={modal} current={current} productId={sku} />
    </React.Fragment>
  );
};

export default TableProducts;
