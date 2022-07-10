import React, {useContext} from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import SidebarButton from "./AppButtons/HeaderButton/SidebarButton";
import HomeButton from "./AppButtons/HeaderButton/HomeButton";
import AddTaskButton from "./AppButtons/HeaderButton/AddTaskButton";
import AnalyticsButton from "./AppButtons/HeaderButton/AnalyticsButton";
import QuestionButton from "./AppButtons/HeaderButton/QuestionButton";
import NotificationButton from "./AppButtons/HeaderButton/NotificationButton";
import "./AppHeader.scss";
import {AuthContext} from '../../contexts/AuthContext';

const AppHeader = props => {
  const {logoutUser} = useContext(AuthContext);
  return (
    <header id="app__header">
      <div className="app__container">
        <nav className="app__nav">
          <div className="nav__wrapper nav__wrapper_left">
            <SidebarButton
              setActiveSidebar={props.setActiveSidebar}
              activeSidebar={props.activeSidebar}
            />
            <HomeButton />
            <div
              className={
                props.activeSidebar ? "search__bar" : "search__bar active"
              }
            >
              <input
                className="search__input"
                type="text"
                placeholder="Search"
              ></input>
              <div className="search__bar_btn">
                <BsQuestionCircle
                  style={{ fontSize: "1.2rem", color: "#828282" }}
                />
              </div>
              <div className="search__bar_btn">
                <BiX style={{ fontSize: "1.8rem", color: "#828282" }} />
              </div>
            </div>
          </div>
          <div className="nav__wrapper nav__wrapper_right">
            <AddTaskButton />
            <AnalyticsButton />
            <QuestionButton />
            <NotificationButton />
            <div className="user__avatar" >
              <FaUserCircle
                style={{ fontSize: "22px", color: "white", marginTop: "3px" , cursor: 'pointer'}}
                onClick={logoutUser}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
