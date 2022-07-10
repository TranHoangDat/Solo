import React from "react";
import { BsChatSquare } from "react-icons/bs";
import "./ContentButton.scss";

const CommentButton = props => {
  return (
    <div
      className={
        props.full
          ? "app__btn_wrapper content__btn full comment__btn"
          : "app__btn_wrapper content__btn comment__btn"
      }
    >
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="currentColor"
              fill-rule="nonzero"
              d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
            ></path>
          </svg>
        </div>
        <div className="btn__name">Comments</div>
      </div>
    </div>
  );
};

export default CommentButton;
