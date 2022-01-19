import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import registerReducer from "./register/registerReducer";
import loginReducer from "./login/loginReducer";
import addProductReducer from "./addProduct/addProductReducer";
import updateProductReducer from "./updateProduct/updateProductReducer";
import deleteProductReducer from "./deleteProduct/deleteProductReducer";
import productBySkuReducer from "./productBySku/productBySkuReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  register: registerReducer,
  login: loginReducer,
  addProduct: addProductReducer,
  updateProduct: updateProductReducer,
  deleteProduct: deleteProductReducer,
  productBySku: productBySkuReducer,
});

export default rootReducer;
