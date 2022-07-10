import React from "react";
import { FiEdit3 } from "react-icons/fi";

const EditButton = () => {
  return (
    <div className="app__btn_wrapper edit__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <FiEdit3 className="icon" />
        </div>
      </div>
    </div>
  );
};

export default EditButton;
