import React, { useState, useEffect } from "react";
import moment from "moment";
import { validateTimeInput } from "@helpers/TimeHelper";
import AddButton from "../AppButtons/CtaButton/NoBgAddButton";
import CancelButton from "../AppButtons/CtaButton/CancelButton";
import "./AddTimeMenu.scss";
import WarningTimeTag from "../AppTags/WarningTimeTag";

const AddTimeMenu = props => {
  const [invalidTime, setInvalidTime] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [timeValue, setTimeValue] = useState(null);

  function handleAddTime() {
    if (!invalidTime) {
      let startDate = null;

      if (props.value) {
        startDate = props.value;
      } else {
        const today = moment();

        if (
          today.hour() > timeValue.hour() ||
          (today.hour() === timeValue.hour() &&
            today.minute() > timeValue.minute())
        ) {
          startDate = today.clone().add(1, "day");
        }
      }

      props.setTimeValue(timeValue);
      props.setScheduleMenuInput(
        startDate.format("D MMM") + " " + timeValue.format("HH:mm")
      );
      props.setActiveMenu(false);
      props.setActiveAddTime(false);
    }
  }

  function handleOnClickCancelBtn() {
    props.setActiveAddTime(false);
    props.setActiveMenu(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddTime();
    }
  }

  function handleOnBlur() {
    props.setActiveMenu(false);
    props.setActiveAddTime(false);
  }

  function handleOnChangeInput(e) {
    setInputStr(e.target.value);
  }

  useEffect(() => {
    if (inputStr !== "") {
      const timeValueVar = validateTimeInput(inputStr);

      if (!timeValueVar.isValid()) {
        setInvalidTime(true);
      } else {
        setTimeValue(timeValueVar);
        setInvalidTime(false);
      }
    } else {
      setInvalidTime(false);
    }
  }, [inputStr]);

  return (
    <div
      className="app__menu_wrapper add_time__menu"
      // onBlur={() => handleOnBlur()}
    >
      <ul className="app__menu_list">
        <li className="app__menu_item">
          <div className="menu__input_wrapper">
            <p className="input__name">Time</p>
            {invalidTime && <WarningTimeTag />}
            <input
              className="input__box"
              placeholder="eg, 14:00"
              value={inputStr}
              onChange={e => handleOnChangeInput(e)}
              onKeyDown={e => handleKeyDown(e)}
              autoFocus
            />
          </div>
        </li>
      </ul>
      <div className="menu__buttons_wrapper">
        <AddButton btnName={"Add"} handleOnClick={handleAddTime} />
        <CancelButton handleOnClick={handleOnClickCancelBtn} />
      </div>
    </div>
  );
};

export default AddTimeMenu;
