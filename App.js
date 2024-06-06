import React from "react";
import ReactDOM from "react-dom/client";

/**
 * APP
 *  Header
 *   - Logo
 *   - Nav Items
 *  Body
 *   - search
 *   - restro Body
 *        - restro card
 *  Footer
 *   - copyright
 *   - links
 */

const Header = () => {
  return (
    <div className="Header" >
      <div className="LogoContainer">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxodBCOx28Vb76OItsEulidWkalURaNu3sMw&s" />
      </div>
      <ul className="NavItems">
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Body = () => {
    return (
        <div className="Body">
            <div className="SearchBox"></div>
            <div></div>
        </div>
    );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(<AppLayout />);
