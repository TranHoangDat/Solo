import React from "react";
import ListViewIcon from "../../../Icons/ListViewIcon";
import BoardViewIcon from "../../../Icons/BoardViewIcon";

const ChangeViewItem = (props) => {
  return (
    <li className="menu__selection_item" onClick={()=> props.handleOnClick()}>
      {props.view==='BOARD' && (
      <>
        <ListViewIcon width={24} />
        <p className="selection__title">View as list</p>
      </>
      )}
      {props.view==='LIST' && (
      <>
        <BoardViewIcon />
        <p className="selection__title">View as board</p>
      </>
      )}
    </li>
  );
};

export default ChangeViewItem;
