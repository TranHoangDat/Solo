import React from "react";

const AddSectionButton = (props) => {
  return (
    <div
      className={
        props.listView
          ? "app__btn_wrapper add__btn add_section__btn list__view"
          : "app__btn_wrapper add__btn add_section__btn"
      }
    >
      <div className="btn__name_wrapper">
        <div className="btn__name">Add section</div>
      </div>
    </div>
  );
};

export default AddSectionButton;
