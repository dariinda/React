import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async () =>{
    const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=47597&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const{name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  if(resInfo=== null){
    return <Shimmer/>
  }

  return (
    <div className="menu">
      <h2 className="restoName">{name || 'Unknown'}</h2>
      <h3>{cuisines || 'Unknown'}</h3>
      <h2>{costForTwoMessage || 'Unknown'}</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
