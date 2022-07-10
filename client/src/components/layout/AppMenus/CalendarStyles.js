import { getTodayId, getSelectedId } from "@helpers/CalendarHelper";

function isSelected(day, value) {
  return value && value.isSame(day, "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

function beforeToday(day) {
  return day.isBefore(new Date(), "day");
}

function isSameMonth(day, firstDayOfMonth) {
  return day.isSame(firstDayOfMonth, "month");
}

function isRestDay(day) {
  return day.format("ddd") === "Sun" || day.format("ddd") === "Sat";
}

export default function classDayStyles(day, value, firstDayOfMonth) {
  if (!isSameMonth(day, firstDayOfMonth)) return "before";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";
  if (beforeToday(day) && isSameMonth(day, firstDayOfMonth))
    return "same__month";
  if (isRestDay(day)) return "rest";
  return "";
}

export function idDayStyles(day, value) {
  if (isToday(day)) return getTodayId();
  return undefined;
}
