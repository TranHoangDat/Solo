import React from "react";

const WarningIcon = props => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="#979797" fill-rule="evenodd">
        <path
          d="M12 9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          fill="#D1453B"
        ></path>
        <path
          d="M13.73 4.96L20.75 17A2 2 0 0 1 19.02 20H4.98a2 2 0 0 1-1.73-3l7.02-12.04a2 2 0 0 1 3.46 0zm-.7.55a1.2 1.2 0 0 0-2.07 0L4.15 17.2A1.2 1.2 0 0 0 5.18 19h13.64a1.2 1.2 0 0 0 1.03-1.8L13.04 5.5z"
          fill="#D1453B"
        ></path>
      </g>
    </svg>
  );
};

export default WarningIcon;
