import React from "react";

const SingleProjectIcon = props => {
  return props.width === 24 ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class={`project__icon ${props.color}`}
    >
      <path d="M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
    </svg>
  ) : props.width === 16 ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class={`project__icon ${props.color}`}
    >
      <circle cx="8" cy="8" r="3.5" fill="#B8B8B8"></circle>
    </svg>
  ) : (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      class={`project__icon ${props.color}`}
    >
      <circle cx="6" cy="6" r="4" fill="#B8B8B8"></circle>
    </svg>
  );
};

export default SingleProjectIcon;
