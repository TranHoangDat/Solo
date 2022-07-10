import React, { useState, useEffect } from "react";
import tabStyles from "./CalendarStyles";
import "./CalendarTab.scss";
const CalendarTab = props => {
  const [available, setAvailable] = useState(false);

  function handleOnClick() {
    if (available) {
      props.setValue(props.day);
      props.setScrollToSection(true);
    }
  }

  useEffect(() => {
    if (props.day.isBefore(new Date(), "day")) {
      setAvailable(false);
    } else {
      setAvailable(true);
    }
  }, [props.day]);

  return (
    <div
      className={"calendar__tab_wrapper " + tabStyles(props.day, props.value)}
      onClick={() => handleOnClick()}
    >
      <div className="day__name">{props.day.format("ddd")}</div>
      <div className="day__value">{props.day.format("D")}</div>
    </div>
  );
};

export default CalendarTab;
