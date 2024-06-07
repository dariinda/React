import resList from "../utils/resList";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const deliveryTime = resData?.info?.sla?.deliveryTime;
  return (
    <div className="restoCard">
      <div className="restoImg">
        <img
          className="foodImg"
          src={
             CDN_URL + cloudinaryImageId 
          }
        />
      </div>
      <div className="restoDetail">
        <h3 className="restoName">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <div className="restoDel">
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} minutes</h4>
        </div>
      </div>
      <div className="cartAdd">Add +</div>
    </div>
  );
};

export default RestaurantCard;
