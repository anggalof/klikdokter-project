import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRegister, fetchLogin } from "../../common";
import { getLoginAuth, clearLoginAuth } from "../../utils/authServices";
import { isEmpty } from "../../utils/formatter/isEmpty";
import Modal from "../Modal";

const initialState = {
  email: "",
  password: "",
};

export const Navigation = () => {
  const loginError = useSelector((state) => state.login.error);
  const register = useSelector((state) => state.register.register);
  const registerError = useSelector((state) => state.register.error);
  const [{ email, password }, setState] = useState(initialState);
  const [current, setCurrent] = useState("");
  const [loading, setLoading] = useState(false);
  const modal = useRef(null);
  const dispatch = useDispatch();

  const openForm = (val) => {
    setCurrent(val);
    return modal.current.open();
  };

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
      email,
      password,
    };
    setLoading(true);
    if (current === "Register") {
      dispatch(fetchRegister(payload));
    } else {
      dispatch(fetchLogin(payload));
    }
  };

  const handleSignout = () => {
    clearLoginAuth();
    window.location.reload();
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="flex items-center navbar-brand page-scroll" href="/">
            <span>KLIKDOKTER</span>
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          {!isEmpty(getLoginAuth()) ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div onClick={handleSignout} className="page-button">
                  LOGOUT
                </div>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div
                  onClick={() => openForm("Register")}
                  className="page-button"
                >
                  REGISTER
                </div>
              </li>
              <li>
                <div onClick={() => openForm("Login")} className="page-button">
                  LOGIN
                </div>
              </li>
            </ul>
          )}
        </div>
        <Modal ref={modal}>
          {!isEmpty(register) ? (
            <div className="center">
              {register.message} Please Login for CRUD Access
            </div>
          ) : (
            <form name="sentVal" validate="true" onSubmit={handleSubmit}>
              <div className="modal-error">
                {loginError} {registerError && "Data you entered is wrong"}
              </div>
              <div className="modal-wrapper">
                <div className="modal-container">
                  <div className="modal-input">
                    <span>Email</span>
                    <input type="email" name="email" onChange={handleChange} />
                  </div>
                  <div className="modal-input">
                    <span>Password</span>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal-button">
                    <button>{loading ? "Loading..." : current}</button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </nav>
  );
};
