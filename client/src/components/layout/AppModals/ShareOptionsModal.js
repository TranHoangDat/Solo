import React, { useState, useContext, useEffect } from "react";
import { BsX } from "react-icons/bs";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import CollaboratorsTabContent from "../TabsContent/CollaboratorsTabContent";
import InviteTabContent from "../TabsContent/InviteTabContent";
import "./ShareOptionsModal.scss";
import {ProjectContext} from '../../../contexts/ProjectContext';
import {SharingContext} from '../../../contexts/SharingContext';

const ShareOptionsModal = () => {
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();

  const {projectState: {projectActive}} = useContext(ProjectContext);
  const {
    loadCollaborators,
    loadInvitedUsers,
  } = useContext(SharingContext);

  const Tab = {
    COLLABORATORS: 0,
    INVITE: 1,
  };

  const [activeTab, setActiveTab] = useState(Tab.COLLABORATORS);

  const closeModal = () => {
    setActiveTab(Tab.COLLABORATORS);
    handleActiveModal(ModalTypes.NONE);
  }

  const resetModal = () => {
    setActiveTab(Tab.COLLABORATORS);
  }

  useEffect(() => {
    const fetchData = async () => {
      if(!projectActive) return;
      
      await loadCollaborators(projectActive.id);
      await loadInvitedUsers(projectActive.id);
    }
    fetchData();

    return () => {
      loadCollaborators(null);
      loadInvitedUsers(null);
    }
  }, [projectActive])

  return (
    <div
      className={
        modal === ModalTypes.SHARE
          ? "project__modal modal active"
          : "project__modal modal"
      }
      id="share_options__modal"
    >
      <div className="modal__header">
        <div className="modal__wrapper">
          <div className="modal__label"> Share options </div>
          <div
            className="modal__btn"
            onClick={closeModal}
          >
            <BsX className="icon" />
          </div>
        </div>
      </div>
      <div className="modal__body">
        <div className="modal__wrapper">
          <div className="modal__tabs_wrapper">
            <div
              className={
                activeTab === Tab.COLLABORATORS
                  ? "modal__tab active"
                  : "modal__tab"
              }
              onClick={() => setActiveTab(Tab.COLLABORATORS)}
            >
              Collaborators
            </div>
            <div
              className={
                activeTab === Tab.INVITE ? "modal__tab active" : "modal__tab"
              }
              onClick={() => setActiveTab(Tab.INVITE)}
            >
              Invite From Project
            </div>
          </div>
        </div>
        <div className="modal__wrapper">
          {activeTab === Tab.COLLABORATORS ? (
            <CollaboratorsTabContent />
          ) : undefined}
          {activeTab === Tab.INVITE ? <InviteTabContent resetModal={resetModal}/> : undefined}
        </div>
      </div>
    </div>
  );
};

export default ShareOptionsModal;
