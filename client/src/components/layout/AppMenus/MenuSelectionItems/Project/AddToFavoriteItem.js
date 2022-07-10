import React from "react";
import FavoriteIcon from "../../../Icons/FavoriteIcon";

const AddToFavoriteItem = () => {
  return (
    <li className="menu__selection_item">
      <FavoriteIcon />
      <p className="selection__title">Add to favorites</p>
    </li>
  );
};

export default AddToFavoriteItem;
