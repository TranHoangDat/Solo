import React from "react";
import XIcon from "../Icons/XIcon";
import "./TimeTag.scss";

const TimeTag = props => {
  function handleOnClickTagContent() {
    props.setActiveAddTime(true);
  }

  function handleOnClickTagIcon() {
    props.setTimeValue(null);
  }

  return (
    <div className="app__tag_wrapper time__tag">
      <div className="tag__content_wrapper">
        <div className="tag__content" onClick={() => handleOnClickTagContent()}>
          {props.content}
        </div>
        <div className="tag__icon" onClick={() => handleOnClickTagIcon()}>
          <XIcon width={16} />
        </div>
      </div>
    </div>
  );
};

export default TimeTag;
