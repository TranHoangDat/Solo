import React, { useState, useEffect } from "react";
import SectionInput from "../../AppInputs/SectionInput";
import "../AppButtons.scss";
import "./AddButton.scss";

const AddSectionButton = props => {
  const [activeInput, setActiveInput] = useState(false);

  return (
    <div
      className={
        props.listView
          ? "app__btn_wrapper add__btn add_section__btn list__view"
          : "app__btn_wrapper add__btn add_section__btn"
      }
    >
      {!activeInput && (
        <div className="add__btn_wrapper" onClick={() => setActiveInput(true)}>
          <div className="btn__name">Add section</div>
        </div>
      )}
      {activeInput && <SectionInput setActiveInput={setActiveInput} />}
    </div>
  );
};

export default AddSectionButton;
