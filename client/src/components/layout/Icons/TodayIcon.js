import React from "react";

const TodayIcon = props => {
  return props.width === 24 ? (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="#058527" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
          opacity=".1"
          fill="#058527"
        ></path>
        <path
          fillRule="nonzero"
          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
          fill="#058527"
        ></path>
        <text
          fontFamily="Arial, sans-serif"
          fontSize="9"
          transform="translate(4 2)"
          fontWeight="500"
          fill="#058527"
        >
          <tspan x="8" y="15" text-anchor="middle" fill="#058527">
            {props.todayDateStr}
          </tspan>
        </text>
      </g>
    </svg>
  ) : (
    <svg width="28" height="28" viewBox="0 0 28 28">
      <g fill="#058527" fillRule="nonzero">
        <path
          d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z"
          opacity=".1"
          fill="#058527"
        ></path>
        <path
          d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.5 4a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1z"
          fill="#058527"
        ></path>
        <text
          fontFamily="Arial, sans-serif"
          fontSize="11"
          transform="translate(4 2)"
          fontWeight="500"
          fill="#058527"
        >
          <tspan x="9.5" y="18" text-anchor="middle" fill="#058527">
            {props.todayDateStr}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default TodayIcon;
