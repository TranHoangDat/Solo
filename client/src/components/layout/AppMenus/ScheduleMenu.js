import React, { useEffect, useState } from "react";
import buildCalendar from "@helpers/CalendarHelper";
import CalendarMenu from "./CalendarMenu";
import AddTimeButton from "../AppButtons/AddButton/AddTimeButton";
import TodayIcon from "../Icons/TodayIcon";
import TomorrowIcon from "../Icons/TomorrowIcon";
import ThisWeekendIcon from "../Icons/ThisWeekendIcon";
import NextWeekIcon from "../Icons/NextWeekIcon";
import HideIcon from "../Icons/HideIcon";
import ScheduleIcon from "../Icons/ScheduleIcon";
import validateDateTimeInput, { validateTimeInput } from "@helpers/TimeHelper";
import XIcon from "../Icons/XIcon";
import TimeTag from "../AppTags/TimeTag";
import AddButton from "../AppButtons/CtaButton/AddButton";
import "./ScheduleMenu.scss";

const ScheduleMenu = props => {
  const [inputStr, setInputStr] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [validDate, setValidDate] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false);
  const [timeValue, setTimeValue] = useState(null);
  const [activeAddTime, setActiveAddTime] = useState(false);
  const calendar = buildCalendar(props.today);

  function handleOnClickSelection(date) {
    props.setValue(date);
    props.setFocus(false);
  }

  function handleOnChangeInput(e) {
    setInvalidDate(false);
    setInputStr(e.target.value);
  }

  function handleChooseDueDate() {
    props.setValue(dueDate);
    props.setFocus(false);
  }

  function handleOnClickSaveBtn() {
    if (props.value && timeValue.isValid()) {
      props.setValue(
        props.value.clone().set({
          hour: timeValue.hour(),
          minute: timeValue.minute(),
          second: 1,
        })
      );
    } else {
      props.setValue(dueDate);
    }
    props.setFocus(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (dueDate.isValid()) {
        setInvalidDate(false);
        props.setValue(dueDate);
        props.setFocus(false);
      } else {
        setInvalidDate(true);
      }
    }
  }

  function handleOnBlur() {
    if (!activeAddTime) {
      props.setFocus(false);
    }
  }

  useEffect(() => {
    if (props.value && props.value.isValid()) {
      if (props.value.second() !== 0) {
        setInputStr(props.value.format("D MMM HH:mm"));
        setTimeValue(validateTimeInput(props.value.format("H:m")));
      } else {
        setInputStr(props.value.format("D MMM"));
      }
    } else {
      setInputStr("");
    }
  }, [props.value]);

  useEffect(() => {
    if (!timeValue && dueDate) {
      setInputStr(dueDate.format("D MMM"));
    }
  }, [timeValue]);

  useEffect(() => {
    if (inputStr !== "") {
      const dueDateVar = validateDateTimeInput(inputStr);

      if (dueDateVar.isValid()) {
        const dateParts = inputStr.split(" ");

        if (
          validateTimeInput(dateParts[0]).isValid() ||
          validateTimeInput(dateParts[dateParts.length - 1]).isValid()
        ) {
          setDueDate(dueDateVar.set({ second: 1 }));
        } else {
          setDueDate(dueDateVar.set({ second: 0 }));
        }
        setValidDate(true);
      } else {
        setValidDate(false);
      }
    } else {
      setValidDate(false);
    }
  }, [inputStr]);

  return (
    <div
      className="app__menu_wrapper schedule__menu"
      onBlur={() => handleOnBlur()}
    >
      <ul className="app__menu_list">
        <li className="app__menu_item menu__input">
          <input
            placeholder={"Type a due date"}
            value={inputStr}
            onChange={e => handleOnChangeInput(e)}
            onKeyDown={e => handleKeyDown(e)}
            autoFocus
          ></input>
          {inputStr !== "" && (
            <button onClick={() => setInputStr("")}>
              <XIcon />
            </button>
          )}
        </li>
        {dueDate && validDate && (
          <li className="app__menu_item">
            <div
              className="available__date_wrapper"
              onClick={() => handleChooseDueDate()}
            >
              <ScheduleIcon width={24} />
              <div className="due__date_information">
                <p className="menu__title">{dueDate.format("ddd D MMM")}</p>
                <p className="quantity">No tasks</p>
              </div>
              {dueDate.second() !== 0 && (
                <p className="due__time">{dueDate.format("HH:mm")}</p>
              )}
            </div>
          </li>
        )}
        {invalidDate && (
          <li className="app__menu_item">
            <div
              className="available__date_wrapper invalid__date"
              onClick={() => !invalidDate && handleChooseDueDate()}
            >
              <ScheduleIcon width={24} />
              <div className="due__date_information">
                <p className="menu__title">No results</p>
              </div>
            </div>
          </li>
        )}
        <li className="app__menu_item">
          <ul className="menu__selection_list">
            {(!props.value || !props.value.isSame(props.today, "day")) && (
              <li
                className="menu__selection_item"
                onMouseDown={e => e.preventDefault()}
                onClick={() => handleOnClickSelection(props.today)}
              >
                <TodayIcon width={24} todayDateStr={props.today.format("D")} />
                <p className="selection__title">Today</p>
                <p className="selection__sub_title">
                  {props.today.format("ddd")}
                </p>
              </li>
            )}
            {(!props.value || !props.value.isSame(props.tomorrow, "day")) && (
              <li
                className="menu__selection_item"
                onMouseDown={e => e.preventDefault()}
                onClick={() => handleOnClickSelection(props.tomorrow)}
              >
                <TomorrowIcon width={24} />
                <p className="selection__title">Tomorrow</p>
                <p className="selection__sub_title">
                  {props.tomorrow.format("ddd")}
                </p>
              </li>
            )}
            {props.value &&
              props.value.isSame(props.today, "day") &&
              props.laterThisWeek && (
                <li
                  className="menu__selection_item"
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => handleOnClickSelection(props.laterThisWeek)}
                >
                  <ScheduleIcon width={24} color={"#692fc2"} />
                  <p className="selection__title">Later this week</p>
                  <p className="selection__sub_title">
                    {props.laterThisWeek.format("ddd")}
                  </p>
                </li>
              )}
            {(!props.value || !props.value.isSame(props.thisWeekend, "day")) &&
              !props.thisWeekend.isSame(props.tomorrow, "day") &&
              (props.thisWeekend.isSame(props.today, "week") ? (
                <li
                  className="menu__selection_item"
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => handleOnClickSelection(props.thisWeekend)}
                >
                  <ThisWeekendIcon width={24} />
                  <p className="selection__title">This weekend</p>
                  <p className="selection__sub_title">
                    {props.thisWeekend.format("ddd")}
                  </p>
                </li>
              ) : (
                <li
                  className="menu__selection_item"
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => handleOnClickSelection(props.thisWeekend)}
                >
                  <ThisWeekendIcon width={24} />
                  <p className="selection__title">Next weekend</p>
                  <p className="selection__sub_title">
                    {props.thisWeekend.format("ddd D MMM")}
                  </p>
                </li>
              ))}
            {(!props.value || !props.value.isSame(props.nextWeek, "day")) && (
              <li
                className="menu__selection_item"
                onMouseDown={e => e.preventDefault()}
                onClick={() => handleOnClickSelection(props.nextWeek)}
              >
                <NextWeekIcon width={24} />
                <p className="selection__title">Next week</p>
                <p className="selection__sub_title">
                  {props.nextWeek.format("ddd D MMM")}
                </p>
              </li>
            )}
            {props.value && (
              <li
                className="menu__selection_item"
                onMouseDown={e => e.preventDefault()}
                onClick={() => handleOnClickSelection(null)}
              >
                <HideIcon width={24} />
                <p className="selection__title">No Date</p>
              </li>
            )}
          </ul>
        </li>
        <li className="app__menu_item">
          <CalendarMenu
            calendar={calendar}
            value={props.value}
            setValue={props.setValue}
            setActive={props.setFocus}
          />
        </li>
      </ul>
      <div
        className={
          timeValue && timeValue.isValid()
            ? "app__menu_footer show__tag"
            : "app__menu_footer"
        }
      >
        <AddTimeButton
          activeAddTime={activeAddTime}
          setActiveAddTime={setActiveAddTime}
          value={props.value}
          setScheduleMenuInput={setInputStr}
          setTimeValue={setTimeValue}
        />
        {timeValue && (
          <TimeTag
            content={timeValue.format("HH:mm")}
            setActiveAddTime={setActiveAddTime}
            setTimeValue={setTimeValue}
          />
        )}

        {timeValue && (
          <AddButton btnName={"Save"} handleOnClick={handleOnClickSaveBtn} />
        )}
      </div>
    </div>
  );
};

export default ScheduleMenu;
