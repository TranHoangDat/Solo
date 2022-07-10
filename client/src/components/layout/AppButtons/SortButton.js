import React from "react";
import { IoIosSwap } from "react-icons/io";

const SortButton = props => {
  return (
    <div
      className={
        props.full
          ? "app__btn_wrapper content__btn sort__btn"
          : "app__btn_wrapper sort__btn"
      }
    >
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.97913 4.60132V17.2193"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.90002 8.7001C2.90002 8.7001 5.06902 4.6001 6.97802 4.6001C8.88602 4.6001 11.056 8.7001 11.056 8.7001"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9059 19.4276V6.80957"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.985 15.3286C20.985 15.3286 18.815 19.4286 16.907 19.4286C14.999 19.4286 12.829 15.3286 12.829 15.3286"
              stroke="#130F26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="btn__name">Sort</div>
      </div>
    </div>
  );
};

export default SortButton;
