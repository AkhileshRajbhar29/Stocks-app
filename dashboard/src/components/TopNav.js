import React, { useState } from "react";
import axios from "axios";

const FRONTEND = "http://localhost:3000";

const css = `
.tx-nav {
  position: relative;
  z-index: 1000;
  background: #fff;
  border-bottom: 1px solid #dee2e6;
  font-family: inherit;
  box-sizing: border-box;
}
.tx-nav * { box-sizing: border-box; }
.tx-inner {
  position: relative;
  width: 100%;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.tx-logo img { width: 120px; display: block; }
.tx-toggle {
  display: none;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
}
.tx-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #333;
  margin: 4px 0;
}
.tx-menu {
  display: flex;
  align-items: center;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.tx-menu a, .tx-menu button.tx-link {
  display: inline-block;
  color: #212529;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
}
.tx-menu a:hover, .tx-menu button.tx-link:hover {
  background: rgba(0, 200, 150, 0.12);
  border-color: rgba(0, 200, 150, 0.6);
  color: rgb(0, 150, 112);
  transform: translateY(-2px);
}
.tx-menu a:active, .tx-menu button.tx-link:active {
  transform: translateY(0);
}
.tx-menu a.tx-dash {
  background: rgb(0, 200, 150);
  border-color: rgb(0, 200, 150);
  color: #212529;
  box-shadow: 0 4px 5px rgba(0,0,0,0.55);
}
.tx-menu a.tx-dash:hover {
  background: rgb(0, 180, 135);
  color: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

@media (max-width: 991px) {
  .tx-toggle { display: block; }
  .tx-menu {
    display: none;
    position: absolute;
    top: calc(100% - 4px);
    right: 24px;
    left: auto;
    width: max-content;
    min-width: 220px;
    max-width: calc(100vw - 48px);
    background: #fff;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    padding: 12px;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }
  .tx-menu.open { display: flex; }
  .tx-menu li { width: 100%; }
  .tx-menu a, .tx-menu button.tx-link, .tx-menu button.tx-dash {
    display: block;
    width: 100%;
    text-align: left;
  }
}
`;

const TopNav = () => {
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("https://stocks-app-2.onrender.com/auth/logout", {}, { withCredentials: true });
    } finally {
      window.location.href = FRONTEND + "/login";
    }
  };

  return (
    <nav className="tx-nav">
      <style>{css}</style>
      <div className="tx-inner">
        <a className="tx-logo" href={FRONTEND + "/"}>
          <img src={FRONTEND + "/media/images/TradeX_logo.svg"} alt="logo" />
        </a>

        <button className="tx-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={"tx-menu" + (open ? " open" : "")}>
          <li><a href={FRONTEND + "/"}>Home</a></li>
          <li><a href={FRONTEND + "/about"}>About</a></li>
          <li><a href={FRONTEND + "/product"}>Product</a></li>
          <li><a href={FRONTEND + "/pricing"}>Pricing</a></li>
          <li><a href={FRONTEND + "/support"}>Support</a></li>
          <li><button type="button" className="tx-link" onClick={handleLogout}>Logout</button></li>
          <li><a className="tx-dash" href="/">Dashboard</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;