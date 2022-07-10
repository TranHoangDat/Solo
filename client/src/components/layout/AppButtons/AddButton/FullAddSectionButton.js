import React, { useState } from "react";
import { BsViewList } from "react-icons/bs";
import SectionInput from "../../AppInputs/SectionInput";

const FullAddSectionButton = () => {
  const [activeInput, setActiveInput] = useState(false);

  return (
    <div className="app__btn_wrapper add_section__btn full">
      {!activeInput && (
        <div className="add__btn_wrapper" onClick={() => setActiveInput(true)}>
          <div className="btn__icon">
            <BsViewList className="icon" />
          </div>
          <div className="btn__name">Add section</div>
        </div>
      )}
      {activeInput && <SectionInput setActiveInput={setActiveInput} />}
    </div>
  );
};

export default FullAddSectionButton;
