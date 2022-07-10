import React from "react";

const DropdownCheckmarkIcon = props => {
  return (
    <svg
      viewBox="0 0 12 12"
      width={`${props.width}`}
      height={`${props.height}`}
      className="dropdown__checkmark_icon"
    >
      <path
        fill="#DD4B39"
        fill-rule="evenodd"
        d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
      ></path>
    </svg>
  );
};

export default DropdownCheckmarkIcon;
