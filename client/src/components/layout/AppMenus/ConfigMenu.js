import React, {useContext} from "react";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import AddSectionItem from "./MenuSelectionItems/Section/AddSectionItem";
import ChangeViewItem from "./MenuSelectionItems/Project/ChangeViewItem";
import EditProjectItem from "./MenuSelectionItems/Project/EditProjectItem";
import ExportTemplateItem from "./MenuSelectionItems/Project/ExportTemplateItem";
import ImportTemplateItem from "./MenuSelectionItems/Project/ImportTemplateItem";
import DuplicateProjectItem from "./MenuSelectionItems/Project/DuplicateProjectItem";
import EmailItem from "./MenuSelectionItems/Project/EmailItem";
import CalendarFeedItem from "./MenuSelectionItems/Project/CalendarFeedItem";
import ToggleTaskItem from "./MenuSelectionItems/Project/ToggleTaskItem";
import ArchiveProjectItem from "./MenuSelectionItems/Project/ArchiveProjectItem";
import LeaveProjectItem from "./MenuSelectionItems/Project/LeaveProjectItem";
import DeleteProjectItem from "./MenuSelectionItems/Project/DeleteProjectItem";
import AddProjectAboveItem from "./MenuSelectionItems/Project/AddProjectAboveItem";
import AddProjectBelowItem from "./MenuSelectionItems/Project/AddProjectBelowItem";
import ShareProjectItem from "./MenuSelectionItems/Project/ShareProjectItem";
import AddToFavoriteItem from "./MenuSelectionItems/Project/AddToFavoriteItem";
import EditSectionItem from "./MenuSelectionItems/Section/EditSectionItem";
import MoveSectionItem from "./MenuSelectionItems/Section/MoveSectionItem";
import ArchiveSectionItem from "./MenuSelectionItems/Section/ArchiveSectionItem";
import DuplicateSectionItem from "./MenuSelectionItems/Section/DuplicateSectionItem";
import DeleteSectionItem from "./MenuSelectionItems/Section/DeleteSectionItem";

import {AuthContext} from '../../../contexts/AuthContext';
import {ProjectContext} from '../../../contexts/ProjectContext';
import {SectionContext} from '../../../contexts/SectionContext';
import {TaskContext} from '../../../contexts/TaskContext';

const ConfigMenu = props => {
  const {project, section} = props;
  
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();

  const {authState: {user}} = useContext(AuthContext);
  const {
    findProject,
    showCompleted,
    setShowCompleted,
    duplicateProject,
    updateProject,
    leaveProject,
    deleteProject
  } = useContext(ProjectContext);

  const {
    findSection,
    duplicateSection,
    deleteSection, 
  } = useContext(SectionContext);

  const {
    updateWithNewSection
  } = useContext(TaskContext)

  //Function handle on Project
  const editProject = () => {
    findProject(project.id);
    handleActiveModal(ModalTypes.ADD_PROJECT);
    props.setActive(false);
  }

  const changeView = async () => {
    await updateProject({
      id: project.id,
      view: project.view==='BOARD' ? 'LIST' : 'BOARD',
    })
    props.setActive(false);
  }

  const dupProject = async () => {
    await duplicateProject(project.id);
    props.setActive(false);
  }

  const toggleShowTask = () => {
    setShowCompleted(!showCompleted);
    props.setActive(false);
  }

  const archiveProject = async () => {
    await updateProject({
      id: project.id,
      type: project.type==='ARCHIVED'?'COLLABORATIVE':'ARCHIVED',
    })
    props.setActive(false);
  }

  const handleOnLeaveProject = async () => {
    await leaveProject(user.id, project.id)
    props.setActive(false);
  }

  const handleOnDeleteProject = async () => {
    await deleteProject(project.id)
    props.setActive(false);
  }

  //Function handle on Section
  const handleEditSection = () => {
    findSection(section.id);
    props.setActive(false);
  }
  const handleOnDupSection = async () => {
    const response = await duplicateSection(section.id);
    //cần cập nhật lại task
    if(response.success)
      await updateWithNewSection(response.section.id);
    props.setActive(false);
  }
  const handleOnDeleteSection = async () => {
    await deleteSection(section.id);
    props.setActive(false);
  }

  return (
    <div
      tabIndex={1}
      className="app__menu_wrapper only__selection_menu config__menu"
      onBlur={() => props.setActive(false)}
    >
      {props.projectMenu && (
        <ul className="app__menu_list">
          {(props.sidebarMenu && project.type!=='ARCHIVED') && (
            <li className="app__menu_item">
              <ul className="menu__selection_list">
                <AddProjectAboveItem />
                <AddProjectBelowItem />
              </ul>
            </li>
          )}
          {project.type!=='ARCHIVED' &&
          <li className="app__menu_item">
            {props.sidebarMenu ? (
              <ul className="menu__selection_list">
                <EditProjectItem 
                  handleOnClick={editProject}/>
                <ShareProjectItem />
                <AddToFavoriteItem />
              </ul>
            ) : props.inboxProject ? (
              <ul className="menu__selection_list">
                <ChangeViewItem 
                  view={project.view}
                  handleOnClick={changeView}/>
              </ul>
            ) : (
              <ul className="menu__selection_list">
                <EditProjectItem handleOnClick={editProject}/>
                <ChangeViewItem 
                  view={project.view}
                  handleOnClick={changeView}/>
              </ul>
            )}
          </li>
          } 
          {(!props.sidebarMenu && project.type!=='ARCHIVED') && (
            <li className="app__menu_item">
              <ul className="menu__selection_list">
                <AddSectionItem />
              </ul>
            </li>
          )}
          {(!props.sidebarMenu && project.type!=='ARCHIVED') && (
            <li className="app__menu_item">
              <ul className="menu__selection_list">
                <ImportTemplateItem />
                <ExportTemplateItem />
              </ul>
            </li>
          )}

          {project.type!=='ARCHIVED' &&
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              {!props.inboxProject && 
                <DuplicateProjectItem 
                  handleOnClick={dupProject}/>}
              <EmailItem />
              <CalendarFeedItem />
            </ul>
          </li>
          }
          {(!props.sidebarMenu && project.type!=='ARCHIVED') && (
            <li className="app__menu_item">
              <ul className="menu__selection_list">
                <ToggleTaskItem 
                  showCompleted={showCompleted}
                  handleOnClick={toggleShowTask}/>
              </ul>
            </li>
          )}
          {!props.inboxProject && (
            <li className="app__menu_item">
              <ul className="menu__selection_list">
                <ArchiveProjectItem
                  archive={project.type==='ARCHIVED'}
                  handleOnClick={archiveProject}/>
                {(project.numCollaborators>1 &&  project.type!=='ARCHIVED')? 
                (
                  <LeaveProjectItem 
                    handleOnClick={handleOnLeaveProject}/>)
                :(
                  <DeleteProjectItem 
                    handleOnClick={handleOnDeleteProject}/>
                )}
              </ul>
            </li>
          )}
        </ul>
      )}
      {props.sectionMenu && (
        <ul className="app__menu_list">
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              <EditSectionItem 
                handleOnClick={handleEditSection}/>
              <MoveSectionItem />
              <ArchiveSectionItem />
              <DuplicateSectionItem 
                handleOnClick={handleOnDupSection}/>
              <DeleteSectionItem 
                handleOnClick={handleOnDeleteSection}/>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ConfigMenu;
