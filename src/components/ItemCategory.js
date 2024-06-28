import ItemList from "./ItemList";
function ItemCategory({ data }) {
  console.log(data);
  return (
    <div className="w-1/2 mx-auto my-4 bg-gray-100 p-4 shadow-md ">
      <div className="flex justify-between">
        <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
      <div>{/* <ItemList items={data?.itemCards} /> */}</div>
    </div>
  );
}

export default ItemCategory;
