import React, { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import AddTimeMenu from "../../AppMenus/AddTimeMenu";

const AddTimeButton = props => {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleOnClick() {
    props.setActiveAddTime(true);
    setActiveMenu(true);
  }

  return (
    <div className="app__btn_wrapper add__btn child add_time__btn">
      <div
        className="add__btn_wrapper"
        onMouseDown={e => e.preventDefault()}
        onClick={() => handleOnClick()}
      >
        <div className="btn__icon">
          <BsPlus className="icon" />
        </div>
        <div className="btn__name">Add time</div>
      </div>
      {(activeMenu || props.activeAddTime) && (
        <AddTimeMenu
          value={props.value}
          setScheduleMenuInput={props.setScheduleMenuInput}
          setTimeValue={props.setTimeValue}
          setActiveMenu={setActiveMenu}
          setActiveAddTime={props.setActiveAddTime}
        />
      )}
    </div>
  );
};

export default AddTimeButton;
