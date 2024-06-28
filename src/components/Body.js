import { useState, useEffect } from "react";
import RestaurantCard,{withRatingLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [FilresList, setFilresList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResaturantCardWithRating = withRatingLabel(RestaurantCard);

  console.log("body rendered",resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilresList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Adding online status feature to our app
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        It seems you are offline !! Please check your internet connnection.
      </h1>
    );
  }

  //Adding loading , until API is fetched

  return resList.length === 0 ? (
   <Shimmer />
  ) : (
    <div className=" flex-col p-2 mx-4 md:mx-8">
      <div className="flex justify-between items-center mx-4 md:mx-8 my-8">
        <div className="p-2 flex border-2 rounded-lg">
          <input
            className="outline-none"
            placeholder="Restros ...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e)=>{
              if(e.key==="Enter"){
                let filterdRes = resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilresList(filterdRes);
              }
            }}
          />
          <button
            className=""
            onClick={() => {
              let filterdRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilresList(filterdRes);
            }}
          >
            <FaSearch size={20} />
          </button>
        </div>
        <div className="filter">
          <button
            className="border-2 p-2 rounded-lg "
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
      <div className="flex flex-wrap justify-around md:justify-between mx-4 md:mx-8">
        {FilresList.map((restraurant) => (
          <Link
            key={restraurant.info.id}
            to={"/restaurants/" + restraurant.info.id}
          >
            {restraurant?.info?.totalRatingsString ? <ResaturantCardWithRating resData={restraurant}/> : < RestaurantCard resData={restraurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
