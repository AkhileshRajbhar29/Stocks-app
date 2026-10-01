import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, qty, price) => {},
  closeSellWindow: () => {},
  ordersVersion: 0,
  refreshOrders: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [sellOrder, setSellOrder] = useState(null);
  const [ordersVersion, setOrdersVersion] = useState(0);

  const handleOpenBuyWindow = (uid) => {
    setIsSellWindowOpen(false);
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (order) => {
    setIsBuyWindowOpen(false);
    setSellOrder(order);
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSellOrder(null);
  };

  const refreshOrders = () => setOrdersVersion((v) => v + 1);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        ordersVersion,
        refreshOrders,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {/* {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedStockUID}
          defaultQty={sellDefaults.qty}
          defaultPrice={sellDefaults.price}
        />
      )} */}
      {isSellWindowOpen && sellOrder && <SellActionWindow order={sellOrder} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;