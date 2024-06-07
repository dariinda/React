import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className="Header" >
        <div className="LogoContainer">
          <img className="logo" src={LOGO_URL} />
        </div>
        <ul className="NavItems">
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

 export default Header;