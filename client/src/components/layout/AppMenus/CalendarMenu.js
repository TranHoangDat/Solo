import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import {
  getTodayId,
  getNextMonth,
  getPreviousMonth,
  isPrevBtnAvailable,
  isTodayBtnAvailable,
} from "@helpers/CalendarHelper";
import classDayStyles, { idDayStyles } from "./CalendarStyles";
import PrevButton from "../AppButtons/ContentButton/PrevButton";
import NextButton from "../AppButtons/ContentButton/NextButton";
import TodayButton from "../AppButtons/ContentButton/TodayButton";
import "./CalendarMenu.scss";

const CalendarMenu = props => {
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const curMonthRef = useRef(null);
  const scrollElement = document.getElementById("calendar__body");
  const [curMonth, setCurMonth] = useState(moment());
  const [prevMonthPos, setPrevMonthPos] = useState(0);
  const [nextMonthPos, setNextMonthPos] = useState(0);
  const [scrollToToday, setScrollToToday] = useState(false);
  const [scrollToMonth, setScrollToMonth] = useState(false);
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const gapBetweenMonths = 16.8;

  useEffect(() => {
    curMonthRef.current = document.getElementById(curMonth.format("MMM YYYY"));
    if (curMonthRef.current) {
      setPrevMonthPos(curMonthRef.current.offsetTop - gapBetweenMonths);
      setNextMonthPos(
        curMonthRef.current.offsetTop +
          curMonthRef.current.clientHeight +
          gapBetweenMonths
      );
    }

    if (scrollToMonth) {
      const offset = curMonthRef.current.offsetTop - 40;
      scrollElement.scrollTo(0, offset);
      setScrollToMonth(false);
    }
  }, [curMonth]);

  useEffect(() => {
    if (scrollToToday) {
      scrollElement.scrollTo(0, 0);
      setScrollToToday(false);
    }
  }, [scrollToToday]);

  function onScrollBody() {
    if (scrollOnTop && bodyRef.current.scrollTop > 0) {
      setScrollOnTop(false);
    }

    if (!scrollOnTop && bodyRef.current.scrollTop === 0) {
      setScrollOnTop(true);
    }

    const scrollHeight =
      headerRef.current.offsetHeight + bodyRef.current.scrollTop;

    if (scrollHeight >= nextMonthPos) {
      setCurMonth(curMonth.clone().add(1, "month"));
    }

    if (scrollHeight < prevMonthPos) {
      setCurMonth(curMonth.clone().subtract(1, "month"));
    }
  }

  function handleDayItemOnClick(day) {
    props.setValue(day);
    if (props.setScrollToSection) {
      props.setScrollToSection(true);
    }
    props.setActive(false);
  }

  return (
    <div className="app__menu_wrapper calendar__menu">
      <div className="calendar__wrapper">
        <div
          className={
            scrollOnTop ? "calendar__header" : "calendar__header with__border"
          }
          ref={headerRef}
        >
          <div className="calendar__header_wrapper">
            <p className="current__date">{curMonth.format("MMM YYYY")}</p>
            <div className="menu__buttons_wrapper">
              <PrevButton
                isAvailable={isPrevBtnAvailable}
                setScrollToMonth={setScrollToMonth}
                getPreviousMonth={getPreviousMonth}
                curMonth={curMonth}
                setCurMonth={setCurMonth}
              />
              <TodayButton
                value={props.value}
                setValue={props.setValue}
                scrollOnTop={scrollOnTop}
                isAvailable={isTodayBtnAvailable}
                setScrollToToday={setScrollToToday}
              />
              <NextButton
                setScrollToMonth={setScrollToMonth}
                getNextMonth={getNextMonth}
                curMonth={curMonth}
                setCurMonth={setCurMonth}
              />
            </div>
          </div>
          <div className="calendar__header_wrapper">
            <div className="day__names">
              {["M", "T", "W", "T", "F", "S", "S"].map(dayName => (
                <span>{dayName}</span>
              ))}
            </div>
            {/* <div className="hover__date_information">
            <span className="date__information">hi</span>
            <span className="delimiter">.</span>
            <span className="due__task_information">0</span>
          </div> */}
          </div>
        </div>
        <div
          className="calendar__body"
          id="calendar__body"
          ref={bodyRef}
          onScroll={() => onScrollBody()}
        >
          {props.calendar.map((month, idx) => {
            let curMonthVar = moment();
            return (
              <div
                key={curMonthVar.clone().add(idx, "month").format("MMM YYYY")}
                className="month__wrapper"
                id={curMonthVar.clone().add(idx, "month").format("MMM YYYY")}
              >
                {idx !== 0 && (
                  <div className="month__name">
                    {curMonthVar.clone().add(idx, "month").format("MMM")}
                  </div>
                )}
                <ul className="week__list">
                  {month.map(week => (
                    <li className="week__item">
                      <ul className="day__list">
                        {week.map(day => (
                          <li
                            className={
                              "day__item " +
                              classDayStyles(
                                day,
                                props.value,
                                curMonthVar
                                  .clone()
                                  .add(idx, "month")
                                  .startOf("month")
                              )
                            }
                            id={idDayStyles(day, props.value)}
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => handleDayItemOnClick(day)}
                          >
                            {day.format("D")}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarMenu;
