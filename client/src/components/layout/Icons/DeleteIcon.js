import React from "react";

const DeleteIcon = props => {
  return (
    <svg width="24" height="24">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <rect width="14" height="1" x="5" y="6" fill="#808080" rx=".5"></rect>
        <path fill="#808080" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path>
        <path
          stroke="#808080"
          d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"
          fill="none"
        ></path>
      </g>
    </svg>
  );
};

export default DeleteIcon;
