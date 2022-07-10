import React from "react";
import ChangeSortingButton from "../AppButtons/ContentButton/ChangeSortingButton";
import ResetSortingButton from "../AppButtons/ContentButton/ResetSortingButton";
import ReverseOrderButton from "../AppButtons/ContentButton/ReverseOrderButton";
import "./_AppBar.scss";

const SortBar = props => {
  return (
    <div className="app__bar_wrapper">
      <div className="bar__buttons_wrapper">
        <ReverseOrderButton />
        <ChangeSortingButton />
        <ResetSortingButton setActive={props.setActive} />
      </div>
    </div>
  );
};

export default SortBar;
