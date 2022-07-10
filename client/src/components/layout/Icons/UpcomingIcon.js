import React from "react";

const UpcomingIcon = props => {
  return (
    <svg
      width={`${props.width}`}
      height={`${props.height}`}
      viewBox={`0 0 ${props.width} ${props.height}`}
    >
      <g fill="#692FC2" fill-rule="nonzero">
        <path
          d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
          opacity="0.1"
          fill="#692FC2"
        ></path>
        <path
          d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"
          fill="#692FC2"
        ></path>
      </g>
    </svg>
  );
};

export default UpcomingIcon;
