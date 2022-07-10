import React from "react";
import { BsChatSquare } from "react-icons/bs";

const CommentButton = props => {
  return (
    <div
      className={
        props.full
          ? "app__btn_wrapper content__btn comment__btn"
          : "app__btn_wrapper comment__btn"
      }
    >
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <BsChatSquare className="icon" />
        </div>
        <div className="btn__name">Comments</div>
      </div>
    </div>
  );
};

export default CommentButton;
