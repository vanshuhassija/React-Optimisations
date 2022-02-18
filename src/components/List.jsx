import React from "react";
import ListItem from "./ListItem";

function List(props) {
  console.log("Render: List");
  const { list } = props;
  return (
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default React.memo(List);

// If the props of child remain the same, then the child
// should not update/rerender

//HOC: React.memo()

// It saves the output in memory
// If same input(props) is given, the result is fetched
//from cache
// It does not re render the child if props are same

//Pure Component
// A function which only depends on props to derive its UI
