import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";


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
  position: relative;d
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
  gap: 28px;
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
  padding: 8px 8px;
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
.tx-menu a.active {
  background: rgba(0, 200, 150, 0.15);
  border-color: rgb(0, 200, 150);
  color: rgb(0, 150, 112);
}

.tx-menu button.tx-dash {
  background: rgb(0,200,150);
  color: #212529;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 500;
  border: 0;
  font-size: 20px;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 5px rgba(0,0,0,0.55);
}


.tx-menu a.tx-dash:hover, .tx-menu button.tx-dash:hover {
  background: rgb(0, 180, 135);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
}


.tx-drop { position: relative; }
.tx-drop-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 140px;
  margin: 8px 0 0;
  padding: 6px 0;
  list-style: none;
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}
.tx-drop-menu.open { display: block; }
.tx-drop-menu a { display: block; padding: 8px 16px; font-size: 18px; }
.tx-drop-menu a:hover { background: #f1f3f5; }

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

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  // har page change par login status check + menu band
  useEffect(() => {
    setOpen(false);
    setDropOpen(false);
    axios
      .get("https://stocks-app-2.onrender.com/auth/verify", { withCredentials: true })
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, [location.pathname]);

  const handleDashboardClick = async () => {
    try {
      await axios.get("https://stocks-app-2.onrender.com/auth/verify", { withCredentials: true });
      window.location.href = DASHBOARD_URL;
    } catch (err) {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://stocks-app-2.onrender.com/auth/logout", {}, { withCredentials: true });
    } finally {
      setLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    <nav className="tx-nav">
      <style>{css}</style>
      <div className="tx-inner">
        <Link className="tx-logo" to="/">
          <img src="/media/images/TradeX_logo.svg" alt="logo" />
        </Link>

        <button className="tx-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={"tx-menu" + (open ? " open" : "")}>
          <li><NavLink to="/" end>Home</NavLink></li>

          {loggedIn ? (
            <li>
              <button type="button" className="tx-link" onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="tx-drop">
              <button type="button" className="tx-link" onClick={() => setDropOpen(!dropOpen)}>
                Signup/Login ▾
              </button>
              <ul className={"tx-drop-menu" + (dropOpen ? " open" : "")}>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </li>
          )}
 

          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li>
            <button type="button" className="tx-dash" onClick={handleDashboardClick}>Dashboard</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;