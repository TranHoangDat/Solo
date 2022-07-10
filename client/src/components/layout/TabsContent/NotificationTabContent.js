import React, { useState, useRef, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import JoiningIcon from "../Icons/JoiningIcon";
import RejectingIcon from "../Icons/RejectingIcon";
import AssigningIcon from "../Icons/AssigningIcon";
import AddingCommentIcon from "../Icons/AddingCommentIcon";
import MarkAsReadButton from "../AppButtons/CtaButton/MarkAsReadButton";
import RejectButton from "../AppButtons/CtaButton/RejectButton";
import AddButton from "../AppButtons/CtaButton/NoBgAddButton";
import "./NotificationTabContent.scss";
import { ProjectContext } from "../../../contexts/ProjectContext";
const NotificationTabContent = () => {
  const {
    invitations,
    getInvitations,
  } = useContext(ProjectContext);
  const NotificationType = {
    OTHER: -1,
    JOINING: 0, // Collaborator join a project.
    REJECTING: 1, // Collaborator reject joining/left a project.
    ASSIGNING: 2, // Collaborator assign a task for the user.
    ADDING_COMMENT: 3, // Collaborator add a comment.
  };

  useEffect(() => {
    const fetchData = async () => {
      await getInvitations();
    }
    fetchData();
  },[]);

  return (
    <div className="notification__tab_content">
      <ul className="notification__list">
        {invitations.map(invitation => (
          <NotificationItem
            unread={false}
            type={NotificationType.OTHER}
            userName={invitation.sharingUserEmail}
            summaryDescription={"invited you to"}
            projectId={invitation.projectId}
            projectName={invitation.projectName}
            typeList={NotificationType}
            invitation={true}
          />
        ))}
        
        {/* <NotificationItem
          unread={false}
          type={NotificationType.ADDING_COMMENT}
          userName={"tranhoangdat77"}
          summaryDescription={"added a project comment to"}
          projectName={"Welcome"}
          detailedDescription={"'a'"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={false}
          type={NotificationType.OTHER}
          userName={"tranhoangdat77"}
          summaryDescription={"invited you to"}
          projectName={"Welcome"}
          typeList={NotificationType}
          invitation={true}
        />
        <NotificationItem
          unread={false}
          type={NotificationType.OTHER}
          summaryDescription={"You joined"}
          projectName={"Welcome"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={false}
          type={NotificationType.JOINING}
          userName={"tranhoangdat77"}
          summaryDescription={"joined"}
          projectName={"Welcome"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={false}
          type={NotificationType.REJECTING}
          userName={"tranhoangdat77"}
          summaryDescription={"left"}
          projectName={"Welcome"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={false}
          type={NotificationType.ASSIGNING}
          userName={"tranhoangdat77"}
          summaryDescription={"assigned a task in"}
          projectName={"Welcome"}
          detailedDescription={"a"}
          typeList={NotificationType}
        /> */}
      </ul>
    </div>
  );
};

export const NotificationItem = props => {
  const itemRef = useRef(null);
  const [labelTop, setLabelTop] = useState(0);
  const [unread, setUnread] = useState(props.unread);

  const {
    acceptInvitation,
    denyInvitation,
  } = useContext(ProjectContext);

  const handleOnAcceptInvitation = async() =>{
    await acceptInvitation(props.projectId);
  }

  const handleOnDenyInvitation = async() =>{
    await denyInvitation(props.projectId);
  }

  useEffect(() => {
    setLabelTop(itemRef.current.offsetTop + itemRef.current.clientHeight + 34);
  }, []);

  return (
    <li
      className={unread ? "notification__item unread" : "notification__item"}
      ref={itemRef}
    >
      <div className="notification__icon">
        <FaUserCircle style={{ fontSize: "3.25rem" }} />
        {props.type === props.typeList.JOINING && <JoiningIcon />}
        {props.type === props.typeList.REJECTING && <RejectingIcon />}
        {props.type === props.typeList.ASSIGNING && <AssigningIcon />}
        {props.type === props.typeList.ADDING_COMMENT && <AddingCommentIcon />}
      </div>
      <div className="notification__information">
        {props.summaryDescription && (
          <p className="summary__description">
            <b>{props.userName}</b> {props.summaryDescription}{" "}
            <b>{props.projectName}</b>
          </p>
        )}
        {props.type === props.typeList.OTHER && props.invitation && (
          <AddButton btnName={"Accept"} handleOnClick={handleOnAcceptInvitation}/>
        )}
        {props.detailedDescription && (
          <p className="detailed__description">{props.detailedDescription}</p>
        )}
        {/* <p className="time__distance">1 minute ago</p> */}
      </div>
      <div className="notification__buttons_wrapper">
        {props.type === props.typeList.OTHER && props.invitation && (
          <RejectButton handleOnClick={handleOnDenyInvitation}/>
        )}
        <MarkAsReadButton
          unread={unread}
          setUnread={setUnread}
          labelTop={labelTop}
        />
      </div>
    </li>
  );
};

export default NotificationTabContent;
