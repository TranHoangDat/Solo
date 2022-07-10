import React, { useEffect, useState, useContext } from "react";
import classNames from 'classnames';
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import moment from "moment";
import {Link} from 'react-router-dom';
import { BiUser, BiPlus } from "react-icons/bi";
import InboxIcon from "./Icons/InboxIcon";
import TodayIcon from "./Icons/TodayIcon";
import UpcomingIcon from "./Icons/UpcomingIcon";
import "./AppSidebar.scss";
import ConfigButton from "./AppButtons/ContentButton/ConfigButton";
import AddProjectButton from "./AppButtons/ContentButton/AddProjectButton";
import {ProjectContext} from '../../contexts/ProjectContext';

const AppSidebar = props => {
  //Context 
  const {
    projectState: {project, projects, projectLoading, projectActive},
    getProjects,
    setProjectActive,
  } = useContext(ProjectContext);

  const todayProject = projects.find(project => (project.name==='Today' && project.type==='DEFAULT'));
  const inboxProject = projects.find(project => (project.name==='Inbox' && project.type==='DEFAULT'));

  useEffect(() => {
    const fetchData = async () => {
      await getProjects();
    }
    fetchData();
  }, []);

  //Local state
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();
  const [canClickBsSb, setCanClickBsSb] = useState(false);
  const [activeCustomProjects, setActiveCustomProjects] = useState(false);
  const [labelsActive, setLabelsActive] = useState(false);
  const [filtersActive, setFiltersActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 751) {
      setCanClickBsSb(false);
    } else {
      setCanClickBsSb(true);
    }

    const updateCanClickBsSb = () => {
      if (window.innerWidth >= 751) {
        setCanClickBsSb(false);
      } else {
        setCanClickBsSb(true);
      }
    };

    window.addEventListener("resize", updateCanClickBsSb);

    return () => {
      window.removeEventListener("resize", updateCanClickBsSb);
    };
  }, []);

  function handleBesideSidebarClick() {
    if (canClickBsSb) {
      props.setActiveSidebar(false);
    }
  }

  function handleItemWrapper(e) {
    // ...
    if (canClickBsSb) {
      props.setActiveSidebar(false);
    }
  }

  return (
    <div
      className={
        props.activeSidebar ? "sidebar__overlay active" : "sidebar__overlay"
      }
    >
      <div id="app__sidebar">
        <div className="sidebar__section">
          <div
            className="item__wrapper default__project"
            onClick={handleItemWrapper}
          >
            <InboxIcon width={24} height={24} />
            <div 
              className="item__wrapper_description" 
              onClick={() => setProjectActive(null, 'Inbox')}>
                Inbox
            </div>
            <div className="quantity">10</div>
          </div>

          <div
            className="item__wrapper default__project"
            onClick={handleItemWrapper}
          >
            <TodayIcon
              width={24}
              height={24}
              todayDateStr={moment().format("DD")}
            />
            <div 
              className="item__wrapper_description"
              onClick={() => setProjectActive(null, 'Today')}>
                Today
            </div>
          </div>

          <div
            className="item__wrapper default__project"
            onClick={handleItemWrapper}
          >
            <UpcomingIcon width={24} height={24} />
            <div 
              className="item__wrapper_description"
              onClick={() => setProjectActive(null, 'Upcoming')}>
                Upcoming
            </div>
          </div>
        </div>
        <div className="sidebar__section" id="projects__section">
          <div
            className={
              activeCustomProjects
                ? "section__dropdown section__title active"
                : "section__dropdown section__title"
            }
            onClick={() => setActiveCustomProjects(!activeCustomProjects)}
          >
            <svg
              className="dropdown__icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                fill="black"
              />
            </svg>
            Projects
          </div>

          <div className="dropdown__content">
            <ul className="list__items" id="list_custom__projects">
              {projects.map(project => {
                if(project.type ==='COLLABORATIVE')
                  return(
                    <li key={project.id} className="item__wrapper" onClick={() => setProjectActive(project.id)}>
                      <div className="item__wrapper">
                        <div className={`project__color ${project.color} item__wrapper_description`}>
                          {project.name}
                        </div>
                        <div className="quantity">{project.numIncompletedTasks > 0 ? project.numIncompletedTasks: ''}</div>
                      </div>
                      <ConfigButton projectBtn={true} project={project} sidebarBtn={true} />
                    </li>
                  // <li key={project.id} className="item__wrapper" onClick={() => setProjectActive(project.id)}>
                  //   <div className={`project__color ${project.color} item__wrapper_description`}>{project.name}</div>
                  //   <div className="sidebar__btn config__btn">
                  //     <div className="dot"></div>
                  //     <div className="dot"></div>
                  //     <div className="dot"></div>
                  //   </div>
                  //   <div className="number__tasks">{project.numIncompletedTasks > 0 ? project.numIncompletedTasks: ''}</div>
                  // </li>  
                  )
              })}
            </ul>
            <div className="sidebar__section_wrapper">
              <div id="show_archived__projects">Archived projects</div>
              <ul className="list__items">
                {projects.map(project => {
                  if(project.type ==='ARCHIVED')
                    return(
                      <li key={project.id} className="item__wrapper" onClick={() => setProjectActive(project.id)}>
                        <div className="item__wrapper">
                          <div className={`project__color ${project.color} item__wrapper_description`}>
                            {project.name}
                          </div>
                          <div className="quantity">{project.numIncompletedTasks > 0 ? project.numIncompletedTasks: ''}</div>
                        </div>
                        <ConfigButton projectBtn={true} project={project} sidebarBtn={true} />
                      </li>
                    )
                })}
              </ul>
            </div>
          </div>
          <AddProjectButton sidebarBtn={true} />
        </div>
        <div className="sidebar__section" id="labels_section">
          <div className="sidebar__section_wrapper">
            <div
              className={
                labelsActive
                  ? "section__dropdown section__title active"
                  : "section__dropdown section__title"
              }
              onClick={() => setLabelsActive(!labelsActive)}
            >
              <svg
                className="dropdown__icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                  fill="black"
                />
              </svg>
              Labels
            </div>
          </div>
        </div>
        <div className="sidebar__section" id="filters_section">
          <div className="sidebar__section_wrapper">
            <div
              className={
                filtersActive
                  ? "section__title section__dropdown active"
                  : "section__title section__dropdown"
              }
              onClick={() => setFiltersActive(!filtersActive)}
            >
              <svg
                className="dropdown__icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                  fill="black"
                />
              </svg>
              Filters
            </div>
          </div>
        </div>
      </div>
      <div className="beside__sidebar" onClick={handleBesideSidebarClick}></div>
    </div>
  );
};

export default AppSidebar;
