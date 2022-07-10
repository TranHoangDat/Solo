import React, { useEffect, useState } from "react";
import moment from "moment";
import TodayIcon from "../../Icons/TodayIcon";
import TomorrowIcon from "../../Icons/TomorrowIcon";
import NextWeekIcon from "../../Icons/NextWeekIcon";
import HideIcon from "../../Icons/HideIcon";

const SetScheduleButton = props => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    switch (props.schedule) {
      case "TODAY":
        setValue(moment());
        break;
      case "TOMORROW":
        setValue(moment().add(1, "day"));
        break;
      case "NEXT_WEEK":
        setValue(moment().endOf("week").add(2, "day"));
        break;
      case "NONE":
        break;
    }
  }, []);

  return (
    <div className="app__btn_wrapper content__btn set_schedule__btn">
      <div className="btn__name_wrapper">
        {props.schedule === "TODAY" && value && (
          <TodayIcon todayDateStr={value.format("D")} width={28} />
        )}
        {props.schedule === "TOMORROW" && <TomorrowIcon width={28} />}
        {props.schedule === "NEXT_WEEK" && <NextWeekIcon width={28} />}
        {props.schedule === "NONE" && <HideIcon width={28} />}
      </div>
    </div>
  );
};

export default SetScheduleButton;
