import React from "react";

const CollaborativeProjectIcon = props => {
  return props.width === 24 ? (
    <svg width="24" height="24" className={`project__icon ${props.color}`}>
      <path d="M12 13c3.376 0 5.328 1.187 5.854 3.562A1.181 1.181 0 0116.7 18H7.3a1.182 1.182 0 01-1.154-1.438C6.672 14.187 8.624 13 12 13zm0-7a3 3 0 110 6 3 3 0 010-6z"></path>
    </svg>
  ) : props.width === 16 ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class={`project__icon ${props.color}`}
    >
      <path
        fill="#808080"
        d="M8 9c2.517 0 4.083.76 4.7 2.28A1.25 1.25 0 0111.542 13H4.458A1.25 1.25 0 013.3 11.28C3.917 9.76 5.483 9 8 9zm0-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
      ></path>
    </svg>
  ) : (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      class={`project__icon ${props.color}`}
    >
      <path
        fill="#808080"
        d="M6 7c2.517 0 4.083.76 4.7 2.28A1.25 1.25 0 019.542 11H2.458A1.25 1.25 0 011.3 9.28C1.917 7.76 3.483 7 6 7zm0-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
      ></path>
    </svg>
  );
};

export default CollaborativeProjectIcon;
