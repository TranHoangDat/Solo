function isBeforeToday(day) {
  return day.isBefore(new Date(), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

function isSelected(day, value) {
  return day.isSame(value, "day");
}

export default function tabStyles(day, value) {
  if (isBeforeToday(day)) return "before";
  if (isToday(day) && isSelected(day, value)) return "today selected";
  if (isToday(day)) return "today";
  if (isSelected(day, value)) return "selected";
  return "";
}
