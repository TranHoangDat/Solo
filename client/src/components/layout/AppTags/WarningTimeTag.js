import React from "react";
import AppLabel from "../AppLabel/AppLabel";
import WarningIcon from "../Icons/WarningIcon";

const WarningTimeTag = () => {
  return (
    <div className="app__tag_wrapper warning_time__tag">
      <div className="tag__content_wrapper">
        <div className="tag__icon">
          <WarningIcon />
        </div>
      </div>
      <AppLabel
        content={"Invalid Time\nUse 13:00 or 1PM format"}
        top={26}
        left={-64}
        width={180}
      />
    </div>
  );
};

export default WarningTimeTag;
