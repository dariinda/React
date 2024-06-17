import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams, useParamsd } from "react-router-dom";
import {MENU_URL} from "../utils/constants.js"


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} =useParams();

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async () =>{
    const data =await fetch(MENU_URL+resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  
  if(resInfo === null ){
    return <Shimmer/>;
  }

  const {name, cuisines, costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info ;
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  return (
    <div className="menu">
      <h2 className="restoName">{resInfo?.cards[2]?.card?.card?.info?.name}</h2>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines}</h3>
      <h2>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
      .<ul>
        {itemCards.map((item)=>(
          <li>
            {item.card.info.name} {item.card.info.price || item.card.info.finalPrice}
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
