import RestaurantComponent, { withPromotedLabel } from "./Restaurant";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
/**
 * Body Component
 *
 */

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const RestaurantComponentPronoted = withPromotedLabel(RestaurantComponent);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.1029868&lng=80.2102032&str=restaurants&trackingId=425794aa-54e3-51c8-71ef-f55eab3f10a2&submitAction=ENTER&queryUniqueId=38c27517-b765-ef2f-227e-e92fb9b40022"
    );
    const json = await data.json();
    // console.log(json.data);
    console.log(json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards);
    // json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[0].card.card.info;
    const restaurants =
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;
    // console.log(restaurants);
    if (restaurants) {
      setRestaurant(restaurants);
      setFilterRestaurant(restaurants);
    } else {
      console.error("Failed to find restaurant data in the fetched JSON.");
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like ur internet is down</h1>;
  }

  return (
    <div>
      <div className='m-8'>
        <input
          className='rounded-md bg-gray-100 px-4 py-1 border-2 w-[400px] focus:outline-none'
          type='text'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}></input>
        <button
          className='rounded-md bg-blue-200 mx-1 px-3 py-1.5 text-black shadow-sm'
          onClick={() => {
            const restaurants = listOfRestaurant.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterRestaurant(restaurants);
          }}>
          Search
        </button>
        <button
          className='rounded-md bg-blue-200 mx-1 px-3 py-1.5 text-black shadow-sm'
          onClick={() => {
            const filteredRes = listOfRestaurant.filter((res) => {
              // console.log(res.card.card.info.avgRating);
              return res.card.card.info.avgRating > 4.5;
            });
            // console.log(filteredRes);
            setFilterRestaurant(filteredRes);
          }}>
          Top Restaurants
        </button>
      </div>

      <div className='flex flex-wrap bg-white m-8 justify-center'>
        {/* console.log(listOfRestaurant); */}
        {filterRestaurant.map((res) =>
          /*Higher order component with conditional rendering*/
          res.card.card.info.avgRating > 4.2 ? (
            <RestaurantComponentPronoted
              key={res.card.card.info.id}
              resData={res}
              id={"1"}
            />
          ) : (
            <RestaurantComponent
              key={res.card.card.info.id}
              resData={res}
              id={"1"}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
