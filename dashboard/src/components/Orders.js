import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [soldOrders, setSoldOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3002/allOrders", { withCredentials: true }),
      axios.get("http://localhost:3002/soldOrders", { withCredentials: true }),
    ])
      .then(([buyRes, soldRes]) => {
        setAllOrders(buyRes.data);
        setSoldOrders(soldRes.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [generalContext.ordersVersion]);

  const totalSoldQty = soldOrders.reduce((sum, o) => sum + Number(o.qty), 0);
  const totalSoldValue = soldOrders.reduce(
    (sum, o) => sum + Number(o.qty) * Number(o.price),
    0
  );

  if (loading) {
    return <div className="orders"><p>Loading...</p></div>;
  }

  return (
    <div className="orders">
      {/* Abhi jo stock hai */}
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{Number(order.price).toFixed(2)}</td>
                    <td className="profit">{order.mode}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => generalContext.openSellWindow(order)}
                        style={{
                          background: "#e03131",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          padding: "4px 14px",
                          cursor: "pointer",
                        }}
                      >
                        Sell
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Jo stock bech diya */}
      {soldOrders.length > 0 && (
        <>
          <h3 className="title" style={{ marginTop: "40px" }}>
            Sold Stocks ({soldOrders.length})
          </h3>

          <p style={{ fontSize: "15px", margin: "6px 0 14px" }}>
            Total sold quantity: <b>{totalSoldQty}</b> &nbsp;|&nbsp; Total sold value:{" "}
            <b>₹{totalSoldValue.toFixed(2)}</b>
          </p>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Sold Price</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {soldOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{Number(order.price).toFixed(2)}</td>
                    <td className="loss">
                      {(Number(order.qty) * Number(order.price)).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;