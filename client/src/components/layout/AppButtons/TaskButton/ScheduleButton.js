import React, { useEffect, useState } from "react";
import moment from "moment";
import ScheduleMenu from "../../AppMenus/ScheduleMenu";
import ScheduleIcon from "../../Icons/ScheduleIcon";
import "./TaskButton.scss";

const FullScheduleButton = (props) => {
  const today = moment().set({ second: 0 });
  const tomorrow = today.clone().add(1, "day");
  let thisWeekend = today.clone().endOf("week").set({ second: 0 });
  let laterThisWeek = tomorrow.clone().add(1, "day");
  laterThisWeek = laterThisWeek.isBefore(thisWeekend, "day")
    ? laterThisWeek
    : null;
  thisWeekend = thisWeekend.isAfter(today, "day")
    ? thisWeekend
    : thisWeekend.add(1, "week");
  const nextWeek = today
    .clone()
    .subtract(1, "day")
    .add(1, "week")
    .startOf("week")
    .add(1, "day");
  const [value, setValue] = useState(null);
  const [btnName, setBtnName] = useState("Schedule");
  const [wrapperClass, setWrapperClass] = useState("");
  const [focus, setFocus] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  function handleOnClick() {
    if (!closeMenu) {
      setActiveMenu(true);
      setFocus(true);
      setCloseMenu(false);
    }
  }

  useEffect(() => {
    if (!focus && activeMenu) {
      setActiveMenu(false);
      setCloseMenu(true);
      setTimeout(() => {
        setCloseMenu(false);
      }, 100);
    }
  }, [focus]);

  useEffect(() => {
    if (value && value.isValid()) {
      let prefixBtnName = "";
      if (value.isBefore(today, "minute")) {
        prefixBtnName = "Today";
        setWrapperClass("task__btn_wrapper overdue__schedule");
      } else if (value.isSame(today, "day")) {
        prefixBtnName = "Today";
        setWrapperClass("task__btn_wrapper today__schedule");
      } else if (value.isSame(tomorrow, "day")) {
        prefixBtnName = "Tomorrow";
        setWrapperClass("task__btn_wrapper tomorrow__schedule");
      } else if (value.isSame(thisWeekend, "day")) {
        prefixBtnName = value.format("dddd");
        setWrapperClass("task__btn_wrapper this__weekend_schedule");
      } else if (value.isSame(today, "week")) {
        prefixBtnName = value.format("dddd");
        setWrapperClass("task__btn_wrapper same__week_schedule");
      } else if (value.isSame(nextWeek, "week")) {
        prefixBtnName = value.format("dddd");
        setWrapperClass("task__btn_wrapper next__week_schedule");
      } else {
        prefixBtnName = value.format("D MMM");
        setWrapperClass("task__btn_wrapper next__month_schedule");
      }

      if (value.second() !== 0) {
        setBtnName(prefixBtnName + " " + value.format("HH:mm"));
      } else {
        setBtnName(prefixBtnName);
      }
    } else {
      setBtnName("Schedule");
      setWrapperClass("task__btn_wrapper");
    }
  }, [value]);

  return (
    <div className="app__btn_wrapper task__btn schedule__btn">
      <div
        className={focus ? `${wrapperClass} focus` : `${wrapperClass}`}
        onClick={() => handleOnClick()}
      >
        <div className="btn__icon">
          <ScheduleIcon width={16} />
        </div>
        <div className="btn__name">{btnName}</div>
      </div>
      {activeMenu && (
        <ScheduleMenu
          today={today}
          tomorrow={tomorrow}
          laterThisWeek={laterThisWeek}
          thisWeekend={thisWeekend}
          nextWeek={nextWeek}
          value={value}
          setValue={setValue}
          setFocus={setFocus}
        />
      )}
    </div>
  );
};

export default FullScheduleButton;
