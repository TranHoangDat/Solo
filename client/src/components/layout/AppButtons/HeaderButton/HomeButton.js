import React from "react";
import HomeIcon from "../../Icons/HomeIcon";

const HomeButton = props => {
  return (
    <div className="header__btn_wrapper">
      <div className="header__btn">
        <HomeIcon width={24} />
      </div>
    </div>
  );
};

export default HomeButton;
