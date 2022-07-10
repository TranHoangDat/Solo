import React from "react";

const JoiningIcon = props => {
  return (
    <svg width="16" height="16" className="type__icon">
      <g fill="none" fill-rule="evenodd" transform="translate(-4 -4)">
        <circle cx="12" cy="12" r="8" fill="#3A76EB"></circle>
        <path
          fill="#FFFFFF"
          d="M15 10V8h1v2h2v1h-2v2h-1v-2h-2v-1h2zm-5-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-3.5 6.6c0-1.4 1.6-2.6 3.5-2.6s3.5 1.2 3.5 2.6v.1c0 .5-.4.8-1 .8h-5c-.6 0-1-.3-1-.8z"
        ></path>
      </g>
    </svg>
  );
};

export default JoiningIcon;
