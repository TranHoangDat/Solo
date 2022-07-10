import React from "react";
import { BsChatSquare } from "react-icons/bs";

const QuickCommentButton = () => {
  return (
    <div className="app__btn_wrapper quick_comment__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <BsChatSquare className="icon" />
        </div>
      </div>
    </div>
  );
};

export default QuickCommentButton;
