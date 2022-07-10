export default function buildCalendar(value) {
  let startDay = null;

  if (value.format("ddd") === "Sun") {
    startDay = value.clone().subtract(1, "day").startOf("week");
  } else {
    startDay = value.clone().startOf("week");
  }

  const endDay = value.clone().add(1, "year");
  const day = startDay.clone();
  const calendar = [];
  let isPassed = false;
  let alreadyFirDayOfMonth = false;
  let numberOfWeeks = 0;

  while (day.isBefore(endDay, "day")) {
    const endDayOfMonth = day.clone().endOf("month").isBefore(endDay, "day")
      ? day.clone().endOf("month")
      : endDay;
    if (isPassed) {
      day.subtract(1, "week");
      isPassed = false;
    }
    numberOfWeeks = endDayOfMonth.diff(day, "week") + 1;
    if (endDayOfMonth.format("ddd") === "Sun") {
      numberOfWeeks = numberOfWeeks - 1;
    }
    if (alreadyFirDayOfMonth) {
      day.subtract(1, "day");
      alreadyFirDayOfMonth = false;
    }
    calendar.push(
      Array(numberOfWeeks)
        .fill(Array(7).fill(0))
        .map(week => week.map(() => day.add(1, "day").clone()))
    );

    if (!day.isSame(endDayOfMonth, "month")) {
      isPassed = true;
    } else {
      day.add(1, "day");
      alreadyFirDayOfMonth = true;
    }
  }

  if (value.isAfter(startDay, "month")) {
    calendar.shift();
  }

  return calendar;
}

export function getTodayId() {
  return "today__day_item";
}

export function getSelectedId() {
  return "selected__day_item";
}

export function getPreviousMonth(curMonth) {
  return curMonth.clone().subtract(1, "month");
}

export function getNextMonth(curMonth) {
  return curMonth.clone().add(1, "month");
}

export function isTodayBtnAvailable(day) {
  return day && !day.isSame(new Date(), "day");
}

export function isPrevBtnAvailable(curMonth) {
  return !curMonth.isSame(new Date(), "month");
}

export function isPrevTaskBtnAvailable(curWeek) {
  return !curWeek.isSame(new Date(), "week");
}
