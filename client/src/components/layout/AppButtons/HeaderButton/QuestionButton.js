import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

const QuestionButton = () => {
  return (
    <div className="header__btn_wrapper">
      <div className="header__btn">
        <BsQuestionCircle style={{ color: "white", fontSize: "1.2rem" }} />
      </div>
    </div>
  );
};

export default QuestionButton;
