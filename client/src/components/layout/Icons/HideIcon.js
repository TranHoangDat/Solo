import React from "react";

const HideIcon = props => {
  return props.width === 24 ? (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="#808080"
        fillRule="nonzero"
        d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
      ></path>
    </svg>
  ) : (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <path
        fill="#808080"
        fillRule="nonzero"
        d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
      ></path>
    </svg>
  );
};

export default HideIcon;
