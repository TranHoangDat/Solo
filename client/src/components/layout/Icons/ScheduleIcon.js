import React from "react";

const ScheduleIcon = props => {
  return (
    <>
      {props.width === 16 ? (
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
          ></path>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill={props.color ? props.color : "#808080"}
            fillRule="nonzero"
            d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
          ></path>
        </svg>
      )}
    </>
  );
};

export default ScheduleIcon;
