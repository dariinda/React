import Shimmer from "./Shimmer";
import { useParams, useParamsd } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      const type = c.card?.card?.["@type"];
      return (
        type ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        type ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    });

  return (
    <div className="menu text-center">
      <h2 className=" font-bold text-3xl mb-2 w-">{name}</h2>
      <h3 className=" font-semibold text-2xl">{cuisines.join(" ")}</h3>
      {categories.map((category) => (
        <ItemCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
