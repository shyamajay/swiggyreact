import { useState } from "react";
import ItemList from "./ItemList";
import arrow from "../../downarrow.png";
const Categories = ({ cData, showItems, setShowIndex }) => {
  console.log(cData);
  const title = cData.card.card.title;
  const length = cData.card.card.itemCards.length;

  const handleClick = () => {
    setShowIndex();

    // setShowItems();
  };
  return (
    <div>
      <div className='w-6/12 bg-gray-100 my-4 rounded-lg mx-auto p-2 '>
        {/* Header Accordian
                  [0].card.card.itemCards[0].card.info.imageId */}
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}>
          <span>
            {title} ({length})
          </span>
          <img src={arrow} className='w-6 h-6'></img>
          {/* <span></span> */}
        </div>
        {showItems && <ItemList items={cData.card.card.itemCards} />}
      </div>
    </div>
  );
};

export default Categories;
