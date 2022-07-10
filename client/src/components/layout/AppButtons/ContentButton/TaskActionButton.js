import React, { useState, useRef } from "react";
import useWindowSize from "@hooks/useWindowSize";
import {
  IoEllipsisHorizontalOutline,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import TaskActionMenu from "../../AppMenus/TaskActionMenu";

const TaskActionButton = props => {
  const btnRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuPos, setMenuPos] = useState(null);
  const [windowWidth, windowHeight] = useWindowSize();

  function handleOnClick() {
    const bounding = btnRef.current.getBoundingClientRect();

    if (props.listView) {
      if (bounding.y < 300) {
        setMenuPos({ bottomLeft: true });
      } else if (bounding.y >= windowHeight / 2) {
        setMenuPos({ topLeft: true });
      } else {
        setMenuPos({ leftLeft: true });
      }
    } else {
      if (bounding.y < 350) {
        setMenuPos({ leftPos: bounding.x, bottomBottom: true });
      } else if (windowHeight - bounding.y < 300) {
        setMenuPos({ leftPos: bounding.x, topTop: true });
      } else {
        setMenuPos({ leftPos: bounding.x, topBottom: true });
      }
    }

    props.setFocus(!props.focus);
    setActiveMenu(!activeMenu);
  }

  return (
    <div className="app__btn_wrapper content__btn task_actions__btn">
      <div
        className="btn__name_wrapper"
        onClick={() => handleOnClick()}
        ref={btnRef}
      >
        {props.listView ? (
          <div className="btn__icon">
            <IoEllipsisHorizontalSharp className="icon" />
          </div>
        ) : (
          <div className="btn__icon">
            <IoEllipsisHorizontalOutline className="icon" />
          </div>
        )}
      </div>

      {activeMenu && (
        <TaskActionMenu
          task={props.task}
          setActive={setActiveMenu}
          completed={props.completed}
          listView={props.listView}
          pos={menuPos}
        />
      )}
    </div>
  );
};

export default TaskActionButton;
