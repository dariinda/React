import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import ContactUs from "./ContactUs";

const Header = () => {

    let [signButton, setSignButton] = useState("Log In");


    return (
      <div className="Header" >
        <div className="LogoContainer">
          <Link to="/">
          <img className="logo" src={LOGO_URL} />
          </Link>
        </div>
        <ul className="NavItems">
          <li><Link to="/About">About</Link></li>
          <li><Link to="ContactUs">Contact</Link></li>
          <li>Cart</li>
          <button
            className="SignInButton"
            onClick={() => {
              setSignButton(signButton === 'Log In' ? 'Log Out' : 'Log In');
            }}
            style={{backgroundColor : signButton === 'Log In' ? 'rgb(30, 158, 94)' : 'rgb(15, 159, 236)' , color: "white"}}
          >
            {signButton}
        </button>
        </ul>
      </div>
    );
  };

 export default Header;