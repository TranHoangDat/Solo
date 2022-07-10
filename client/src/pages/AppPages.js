import React, { useState, useContext } from "react";
import {Redirect} from 'react-router-dom';
import "@assets_styles/_AppUtilities.scss";
import AppHeader from "@components/layout/AppHeader";
import AppSidebar from "@components/layout/AppSidebar";
import AppOverlay from "@components/layout/AppOverlay";
import AddProjectModal from "@components/layout/AppModals/AddProjectModal";
import AppContent from "@components/layout/AppContent";
import AddTaskModal from "../components/layout/AppModals/AddTaskModal";
import TaskModal from "../components/layout/AppModals/TaskModal";
import ShareOptionsModal from "../components/layout/AppModals/ShareOptionsModal";
import {AuthContext} from '../contexts/AuthContext';
import ProjectContextProvider from '../contexts/ProjectContext';
import SectionContextProvider from '../contexts/SectionContext';
import TaskContextProvider from '../contexts/TaskContext';
import SharingContextProvider from '../contexts/SharingContext';
import { OverlayProvider } from "@contexts/OverlayContext";
import { ModalProvider } from "@contexts/ModalContext";
import { transitions, types, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

export const AppPages = () => {
  let colorClasses = [
    "berry__red",
    "red",
    "orange",
    "yellow",
    "olive__green",
    "lime__green",
    "green",
    "mint__green",
    "teal",
    "sky__blue",
    "light__blue",
    "blue",
    "charcoal",
  ];
  
  // optional configuration
  const options = {
    position: positions.TOP_CENTER,
    timeout: 2000,
    offset: '15px',
    type: types.INFO, 
    transition: transitions.FADE,
    containerStyle: {
      fontSize: '12px',
      zIndex: 100
    }
  }

  const [activeSidebar, setActiveSidebar] = useState(false);

  //useContext
  const {authState: {
    isAuthenticated,
    authLoading,
    user
  }} = useContext(AuthContext);

  let body;
  if(authLoading){
    body = (
      <div>
        Loading....
      </div>
    )
  }
  else if (!isAuthenticated) {
    body = (
      <Redirect to="/" />
    )
  }
  else if (!user.active) {
    body = (
      <div>
        Your email isn't authenticated
        <br></br>
        <a style={{color: "blue"}} href='https://www.google.com/gmail/'>Click here</a>
      </div>
    )
  }
  else {
    body = (
    <ProjectContextProvider>
      <SectionContextProvider>
        <TaskContextProvider>
          <AlertProvider template={AlertTemplate} {...options}>
          <div id="app">
            <OverlayProvider>
              <ModalProvider>
                <AppHeader
                  activeSidebar={activeSidebar}
                  setActiveSidebar={setActiveSidebar}
                />
                <AppContent activeSidebar={activeSidebar} />
                <AppSidebar
                  activeSidebar={activeSidebar}
                  setActiveSidebar={setActiveSidebar}
                />
                <AppOverlay />
                <AddProjectModal colorClasses={colorClasses} />
                <AddTaskModal />
                <TaskModal taskContent={"a"} />
                <SharingContextProvider>
                  <ShareOptionsModal />
                </SharingContextProvider>
              </ModalProvider>
            </OverlayProvider>
          </div>
          </AlertProvider>
        </TaskContextProvider>
      </SectionContextProvider>
    </ProjectContextProvider>
    )
  }

  return (
    <>
      {body}
    </>
  );
};
