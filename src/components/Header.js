import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {

    let [signButton, setSignButton] = useState("Log In");


    return (
      <div className="Header" >
        <div className="LogoContainer">
          <img className="logo" src={LOGO_URL} />
        </div>
        <ul className="NavItems">
          <li>About</li>
          <li>Contact</li>
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