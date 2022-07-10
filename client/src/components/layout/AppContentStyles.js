export default function contentStyles(defaultProject, listView) {
  let styleStr = "";

  switch (defaultProject) {
    case "Today":
      return "today__project list__view";
    case "Inbox":
      styleStr = "inbox__project";
      break;
    case "Upcoming":
      return "upcoming__project list__view";
  }

  if (listView) {
    return styleStr + " list__view";
  } else {
    return styleStr;
  }
}
