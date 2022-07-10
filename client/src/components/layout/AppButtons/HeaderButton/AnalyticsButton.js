import React from "react";
import AnalyticsIcon from "../../Icons/AnalyticsIcon";

const AnalyticsButton = () => {
  return (
    <div className="header__btn_wrapper">
      <div className="header__btn user__productivity">
        <AnalyticsIcon width={24} />
        <span>0/5</span>
      </div>
    </div>
  );
};

export default AnalyticsButton;
