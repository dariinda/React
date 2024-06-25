import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [signButton, setSignButton] = useState("Log In");
  const onlineStatus = useOnlineStatus(true);

  return (
    <div className=" w-full p-2">
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-8 my-2 shadow-xl bg-white rounded-lg">
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img className="w-24 sm:w-32 rounded-lg" src={LOGO_URL} alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row justify-between gap-4 md:gap-7 mx-4 md:mx-8 my-4 text-xs sm:text-sm md:text-sm lg:text-base xl:text-base items-center">
            <li>{onlineStatus ? "🟢 Online" : "⭕ Offline"}</li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="ContactUs">Contact</Link>
            </li>
            <li>Cart</li>
            <button
              className="SignInButton px-4 py-2 rounded"
              onClick={() => {
                setSignButton(signButton === "Log In" ? "Log Out" : "Log In");
              }}
              style={{
                backgroundColor:
                  signButton === "Log In"
                    ? "rgb(30, 158, 94)"
                    : "rgb(15, 159, 236)",
                color: "white",
              }}
            >
              {signButton}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
