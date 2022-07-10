import React from "react";

const XIcon = props => {
  return props.width === 24 ? (
    <svg width="24" height="24">
      <path
        fill="#808080"
        fill-rule="evenodd"
        d="M12 11.286l3.929-3.929a.505.505 0 1 1 .714.714L12.714 12l3.929 3.929a.505.505 0 1 1-.714.714L12 12.714l-3.929 3.929a.505.505 0 1 1-.714-.714L11.286 12 7.357 8.071a.505.505 0 1 1 .714-.714L12 11.286z"
      ></path>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        fill="#808080"
        fillRule="evenodd"
        d="M12 10.62l4.833-4.834a.976.976 0 1 1 1.381 1.38L13.381 12l4.833 4.833a.976.976 0 0 1-1.38 1.381L12 13.381l-4.833 4.833a.976.976 0 0 1-1.381-1.38L10.619 12 5.786 7.167a.976.976 0 1 1 1.38-1.381L12 10.619z"
      ></path>
    </svg>
  );
};

export default XIcon;
