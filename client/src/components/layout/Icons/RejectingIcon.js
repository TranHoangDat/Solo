import React from "react";

const RejectingIcon = () => {
  return (
    <svg width="16" height="16" className="type__icon">
      <g fill="none" fill-rule="evenodd" transform="translate(-4 -4)">
        <circle cx="12" cy="12" r="8" fill="#3D3D3D"></circle>
        <path
          fill="#FFFFFF"
          d="M10 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-3.5 6.6c0-1.4 1.6-2.6 3.5-2.6s3.5 1.2 3.5 2.6v.1c0 .5-.4.8-1 .8h-5c-.6 0-1-.3-1-.8z"
        ></path>
        <path fill="#F4F4F4" d="M14 11v-1h3v1z"></path>
      </g>
    </svg>
  );
};

export default RejectingIcon;
