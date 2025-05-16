import { useEffect } from "react";
import { useState } from "react";

const useRestaurantMenu = (resId) => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0879584&lng=80.19395759999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
        json.data.cards[2].card.card.info.cloudinaryImageId
    );
    setRes(json.data);
    console.log(res?.cards?.[2]?.card?.card?.info?.name);
  };

  return res;
};
export default useRestaurantMenu;
