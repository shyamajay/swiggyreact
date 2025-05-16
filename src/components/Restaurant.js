import { Link } from "react-router-dom";
import { HOTEL_URL } from "../utils/constants";

const RestaurantComponent = (props) => {
  const { resData, id } = props;
  // console.log(id);
  //   console.log(resData.info.cloudinaryImageId);
  return (
    <div
      className='m-4 h-96 p-4 w-[250px] flex flex-col justify-between rounded-md transform transition-transform duration-300 hover:scale-95 hover:translate-y-1'
      // style={{ backgroundColor: "gainsboro" }}
    >
      <Link to={"/restaurant/" + resData.card.card.info.id}>
        <img
          className='w-full h-32 object-cover rounded-md'
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.card.card.info.cloudinaryImageId
          }></img>
      </Link>
      <h3 className='capitalize'>{resData.card.card.info.name}</h3>
      <h4>
        Address :{" "}
        {resData.card.card.info.areaName +
          " " +
          resData.card.card.info.locality}
      </h4>
      <h4>
        Cuisines : {resData.card.card.info.cuisines.join(", ")}
        {/* {resData.card.card.info.cuisines.map((cuisine) => cuisine + " ")} */}
      </h4>
      <h4>Rating : {resData.card.card.info.avgRating}</h4>
      <h4>
        Delivery Time : {resData.card.card.info.sla.deliveryTime + "mins"}
      </h4>
    </div>
  );
};
// Higher Order Components
export const withPromotedLabel = (Restaurant) => {
  return (props) => {
    // const { resData } = props;
    // console.log(resData);
    return (
      <div>
        <label className='absolute bg-gray-300 rounded-md p-1'>Promoted</label>
        <Restaurant {...props} />
      </div>
    );
  };
};
export default RestaurantComponent;
