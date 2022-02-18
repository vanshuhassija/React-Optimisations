import React from "react";

function ListItem(props) {
  console.log("Render: ListItem");
  const { item } = props;
  return <li>{item.name}</li>;
}

export default React.memo(ListItem);
