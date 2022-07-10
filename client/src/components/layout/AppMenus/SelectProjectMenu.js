import React from "react";
import DropdownCheckmarkIcon from "../Icons/DropdownCheckmarkIcon";
import InboxIcon from "../Icons/InboxIcon";
import SingleProjectIcon from "../Icons/SingleProjectIcon";
import CollaborativeProjectIcon from "../Icons/CollaborativeProjectIcon";
import SectionIcon from "../Icons/SectionIcon";
import "./SelectProjectMenu.scss";

const SelectProjectMenu = props => {
  return (
    <div
      className="app__menu_wrapper select_project__menu"
      // onBlur={() => props.setActiveMenu(false)}
    >
      <ul className="app__menu_list">
        <li className="app__menu_item menu__input">
          <input placeholder={"Type a project"} autoFocus></input>
        </li>
        <li className="app__menu_item">
          <ul className="menu__selection_list">
            <li className="project__selection_item">
              <div className="menu__selection_item">
                <InboxIcon width={24} height={24} />
                <p className="selection__title">Inbox</p>
                <DropdownCheckmarkIcon width={16} height={16} />
              </div>
            </li>

            <li className="project__selection_item">
              <div className="menu__selection_item selected">
                <CollaborativeProjectIcon width={24} color={"blue"} />
                <p className="selection__title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <DropdownCheckmarkIcon width={16} height={16} />
              </div>
              <ul className="section__selection_list">
                <li className="menu__selection_item section__selection_item selected">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
                <li className="menu__selection_item section__selection_item">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
                <li className="menu__selection_item section__selection_item">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
                <li className="menu__selection_item section__selection_item">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
                <li className="menu__selection_item section__selection_item">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
                <li className="menu__selection_item section__selection_item">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
                <li className="menu__selection_item section__selection_item">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
                <li className="menu__selection_item section__selection_item">
                  <SectionIcon width={24} height={24} />
                  <p className="selection__title">Welcome</p>
                  <DropdownCheckmarkIcon width={16} height={16} />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SelectProjectMenu;
