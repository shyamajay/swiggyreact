const ItemList = (props) => {
  const { items } = props;
  console.log(items);
  // console.log(cData.card.card.itemCards[0].card.info.imageId);
  return (
    <div>
      Category Items
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 text-left border-grey-200 border-b-2 flex justify-between'>
          <div className='w-9/12'>
            <span>{item.card.info.name}</span>
            <span className='block text-sm font-normal font-serif'>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice}
            </span>
            <span className='block'>{item.card.info.description}</span>
          </div>
          <div className='w-3/12 p-4'>
            {/* <div className='absolute'>
              <button className='rounded bg-slate-400 mx-11'>Add</button>
            </div> */}
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
