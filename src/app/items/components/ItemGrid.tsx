import { Item, ItemTable } from "@/types/Item";
import React from "react";

type Props = {
  itemTables: ItemTable[];
};

const ItemGrid = ({ itemTables }: Props) => {
  console.log("itemTables", itemTables);

  return (
    <div>
      11
      {/* {itemTables.map((itemTable,idx) => (
        <div key={}>dd</div>
      ))} */}
    </div>
  );
};

ItemGrid.propTypes = {};

export default ItemGrid;
