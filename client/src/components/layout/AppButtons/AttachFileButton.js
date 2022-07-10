import React from "react";
import { FiPaperclip } from "react-icons/fi";

const AttachFileButton = () => {
  return (
    <div className="app__btn_wrapper attach_file__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <FiPaperclip className="icon" />
        </div>
      </div>
    </div>
  );
};

export default AttachFileButton;
