import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const deliveryTime = resData?.info?.sla?.deliveryTime;
  return (
    <div className="p-2 w-full sm:w-72 shadow-2xl rounded-2xl overflow-hidden border-2 mb-10 bg-gray-200 hover:border-2 hover:border-gray-600">
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
      </div>
      <div className="restoDetail p-2">
        <h3 className="restoName text-lg font-bold whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <h5 className="text-gray-600 whitespace-nowrap overflow-hidden">
          {cuisines.join(", ")}
        </h5>
        <div className="restoDel flex justify-between pt-2">
          <h4 className="text-sm text-gray-700 font-semibold">
            {avgRating} stars
          </h4>
          <h4 className="text-sm text-gray-700 font-semibold">
            {deliveryTime} minutes
          </h4>
        </div>
      </div>
      <div className="font-semibold bg-blue-500 text-white text-center py-2 mt-2 rounded-b-2xl cursor-pointer">
        Add +
      </div>
    </div>
  );
};

export const withRatingLabel = (RestaurantCard) => {
  return (props) => {
    const {resData} = props;
    const {totalRatingsString} = resData?.info;
    return (
      <div>
        <label className=" bg-orange-400 text-white absolute rounded-br-lg px-3 py-2">{totalRatingsString}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
