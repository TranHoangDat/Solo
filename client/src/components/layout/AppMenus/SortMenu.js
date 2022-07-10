import React, {useContext} from "react";
import AlphabetIcon from "../Icons/AlphabetIcon";
import PriorityIcon from "../Icons/PriorityIcon";
import ScheduleIcon from "../Icons/ScheduleIcon";
import SettingIcon from "../Icons/SettingIcon";
import "./SortMenu.scss";
import {TaskContext} from '../../../contexts/TaskContext'
const SortMenu = props => {
  //contexts 
  const {sortTasks} = useContext(TaskContext);

  function handleSortByDueDate() {
    sortTasks('DueDate');
    props.setActiveMenu(false);
  }

  function handleSortByPriority() {
    sortTasks('Priority');
    props.setActiveMenu(false);
  }

  function handleSortAlphabetically() {
    sortTasks('Alphabetically');
    props.setActiveMenu(false);
  }

  function handleSortByAssignee() {
    sortTasks('Assignee');
    props.setActiveMenu(false);
  }

  function handleCustomSort() {
    // ...
    props.setActiveMenu(false);
  }

  return (
    <div className="app__menu_wrapper sort__menu">
      <ul className="menu__selection_list">
        <li
          className="menu__selection_item"
          onClick={() => handleSortByDueDate()}
        >
          <ScheduleIcon width={24} />
          <p className="selection__title">Sort by due date</p>
        </li>
        <li
          className="menu__selection_item"
          onClick={() => handleSortByPriority()}
        >
          <PriorityIcon width={24} priority={4} />
          <p className="selection__title">Sort by priority</p>
        </li>
        <li
          className="menu__selection_item"
          onClick={() => handleSortAlphabetically()}
        >
          <AlphabetIcon width={24} height={24} />
          <p className="selection__title">Sort alphabetically</p>
        </li>
        <li
          className="menu__selection_item"
          onClick={() => handleSortByAssignee()}
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 16"
            style={{ margin: "0 4px" }}
          >
            <path
              fill="#808080"
              fill-rule="nonzero"
              d="M8 8.5c2.93 0 4.87.838 5.819 2.515a2 2 0 0 1-1.592 2.98l-.149.005H3.922a2 2 0 0 1-1.74-2.985C3.13 9.338 5.07 8.5 8 8.5zm0 1c-2.604 0-4.204.691-4.948 2.008a1 1 0 0 0 .741 1.484l.129.008h8.156a1 1 0 0 0 .87-1.492C12.204 10.19 10.604 9.5 8 9.5zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.037a1.963 1.963 0 1 0 0 3.926 1.963 1.963 0 0 0 0-3.926z"
            ></path>
          </svg>
          <p className="selection__title">Sort by assignee</p>
        </li>
        <li className="menu__selection_item" onClick={() => handleCustomSort()}>
          <SettingIcon width={24} height={24} />
          <p className="selection__title">Custom sort</p>
        </li>
      </ul>
    </div>
  );
};

export default SortMenu;
