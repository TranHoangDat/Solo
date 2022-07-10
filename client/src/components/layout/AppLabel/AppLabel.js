import React, { useEffect } from "react";
import "./AppLabel.scss";

const AppLabel = props => {
  const labelStyles = {
    width: props.width + "px",
    top: props.top + "px",
    left: props.left + "px",
    right: props.right + "px",
  };

  return (
    <div
      className={
        props.arrow ? "app__label_wrapper arrow" : "app__label_wrapper"
      }
      style={labelStyles}
    >
      <div className="label__content">
        {props.content.split("\n").map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default AppLabel;
