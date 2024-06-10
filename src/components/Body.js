import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FaSearch } from "react-icons/fa";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [FilresList, setFilresList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilresList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  //Adding loading , until API is fetched 
  
  return (resList.length === 0 )? <Shimmer/> : (
    <div className="Body">
      <div className="sortingRestros">
        <div className="Search">
          <input className="SearchBox" placeholder="Restros ...." value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }} />
          <button className="SearchBtn" onClick={()=>{
            let filterdRes = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilresList(filterdRes);
          }}
          ><FaSearch size={20} /></button>
        </div>
        <div className="filter">
          <button
            className="filterbtn"
            onClick={() => {
              const filterdList = resList.filter(
                (res) => res.info.avgRating > 4.1
              );
              setFilresList(filterdList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="resto-container">
        {FilresList.map((restraurant) => (
          <RestaurantCard key={restraurant.info.id} resData={restraurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
