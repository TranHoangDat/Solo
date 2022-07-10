import React, { useState } from "react";
import moment from "moment";
import ScheduleMenu from "../../AppMenus/ScheduleMenu";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

const MoreScheduleButton = () => {
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
  const [activeMenu, setActiveMenu] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <div className="app__btn_wrapper content__btn set_schedule__btn">
      <div
        className="btn__name_wrapper"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <IoEllipsisHorizontalOutline
          style={{ fontSize: "28px", color: "#808080" }}
        />
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

export default MoreScheduleButton;
