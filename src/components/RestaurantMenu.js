import React, { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Categories from "./Categories";

const RestaurantMenu = () => {
  // const [res, setRes] = useState(null);
  const { resId } = useParams();
  // console.log(resId);
  const [showItems, setShowItems] = useState(true);
  const res = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState();
  if (res === null) {
    return <Shimmer />;
  }

  // console.log(res?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    res?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  const { name, cloudinaryImageId, cuisines } =
    res?.cards?.[2]?.card?.card?.info;

  console.log(cloudinaryImageId);

  const itemCards =
    res?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
      ?.itemCards || [];

  // console.log(itemCards);

  return (
    <div className='text-center'>
      {/* <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          cloudinaryImageId
          [0].card.card.itemCards[0].card.info.imageId
        }
      /> */}
      <h3 className='font-bold font-sans text-lg my-5 capitalize'>{name}</h3>
      {/* <h3>{cuisines.join(",")}</h3> */}
      {/* <h3>Menu</h3> */}
      {categories.map((c, index) => (
        <Categories
          key={index}
          cData={c}
          showItems={showIndex === index}
          setShowIndex={() => {
            setShowIndex(showIndex === index ? null : index);
          }}
          // showItems={showIndex == index ? true : false}
          // setShowIndex={() => {
          //   setShowIndex(index);
          // }}
          // setShowItems={() => {
          //   setShowItems(false);
          // }}
        />
      ))}
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>-{item?.card?.info?.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
