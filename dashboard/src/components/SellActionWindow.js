import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ order }) => {
  const [stockQuantity, setStockQuantity] = useState(order.qty);
  const [stockPrice, setStockPrice] = useState(order.price);
  const [error, setError] = useState("");
  const generalContext = useContext(GeneralContext);

  const handleSellClick = () => {
    const qty = Number(stockQuantity);
    if (!qty || qty <= 0) return setError("Enter a valid quantity");
    if (qty > order.qty) return setError(`You can sell max ${order.qty}`);

    axios
      .post(
        `https://stocks-app-2.onrender.com/sellOrder/${order._id}`,
        { qty, price: stockPrice },
        { withCredentials: true }
      )
      .then(() => {
        generalContext.refreshOrders();
        generalContext.closeSellWindow();
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === 401) {
          window.location.href = "http://localhost:3000/login";
        } else {
          setError(err.response?.data || "Sell failed");
        }
      });
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty. (max {order.qty})</legend>
            <input
              type="number"
              min="1"
              max={order.qty}
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
        {error && <p style={{ color: "#e03131", fontSize: "13px" }}>{error}</p>}
      </div>

      <div className="buttons">
        <span>Sell {order.name}</span>
        <div>
          <Link
            to=""
            className="btn"
            onClick={handleSellClick}
            style={{ backgroundColor: "#e03131", color: "#fff" }}
          >
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={() => generalContext.closeSellWindow()}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;