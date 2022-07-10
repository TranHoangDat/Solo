import React, {useState, useEffect, useContext} from "react";
import classNames from 'classnames';
import AddButton from "../AppButtons/CtaButton/AddButton";
import { FaUserCircle } from "react-icons/fa";
import DeleteButton from "../AppButtons/ContentButton/DeleteButton";
import "./CollaboratorsTabContent.scss";
import {AuthContext} from '../../../contexts/AuthContext';
import { ProjectContext } from "../../../contexts/ProjectContext";
import { SharingContext } from "../../../contexts/SharingContext";
import { useAlert } from 'react-alert';

const CollaboratorsTabContent = () => {
  const alert = useAlert();
  const [email, setEmail] = useState('');
  const [clickLoading, setClickLoading] = useState(false);
  const {
    projectState: {projectActive} 
  } = useContext(ProjectContext);
  const {
    sharingState: {collaborators, invitedUsers},
    deleteCollaborator,
    deleteInvitedUser,
    inviteUserByEmail,
  } = useContext(SharingContext);

  const inviteUser = async () => {
    setClickLoading(true);
    try{
      const response = await inviteUserByEmail(projectActive.id, email);
      if(response.success) {
        setEmail('');
      }
      else {
        alert.show(response.message, {
          type: 'error'
        });
      }
    }
    catch(err) {
      console.log(err.stack);
    }
    setClickLoading(false);
  }

  return (
    <div className="collaborators__tab_content">
      <div className="invite__input_wrapper">
        <input 
          className="input__box" 
          type="text" 
          placeholder="Email or Name" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <AddButton 
          btnName={"Invite"} 
          available={true}
          clickLoading={clickLoading}
          handleOnClick={inviteUser}/>
      </div>
      <div className="collaborator__info_list">
        {invitedUsers.map(({id, email}) => (
          <CollaboratorInfo 
            key={id} 
            userId={id} 
            email={email}
            pending={true}
            deleteFunc={deleteInvitedUser}
          />)
        )}
        {collaborators.map(({id, email}) => (
          <CollaboratorInfo 
            key={id} 
            userId={id} 
            email={email} 
            deleteFunc={deleteCollaborator}
          />)
        )}
      </div>
      {/* <div className="tab__content_footer">
        <div className="feature__description">
          <div className="feature__summary">Organize work together</div>
          <div className="feature__details">
            Assign tasks and due dates, discuss details in task comments, and
            keep everyone on the same page.
          </div>
        </div>
      </div> */}
    </div>
  );
};

const CollaboratorInfo = ({userId, email, pending, deleteFunc}) => {
  //Contexts
  const {authState: {user}} = useContext(AuthContext);
  const {
    projectState: {projectActive},
  } = useContext(ProjectContext);

  return (
    <div className="collaborator__info_wrapper">
      <div className="collaborator__avatar">
        <FaUserCircle style={{ color: "red", fontSize: "27px" }} />
      </div>
      <div className="collaborator__info">
        <div className="collaborator__name_wrapper">
          <div className="collaborator__name">{email.replace('@gmail.com','')}</div>
          <div className={classNames('collaboration__status', {'pending': pending})}>pending</div>
        </div>
        <div className="collaborator__email">@gmail.com</div>
      </div>
      {(user.id !== userId) && <DeleteButton handleOnClick={() => deleteFunc(projectActive.id, userId)}/>}
    </div>
  );
};

export default CollaboratorsTabContent;
