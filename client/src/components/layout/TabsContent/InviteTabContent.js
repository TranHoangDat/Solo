import React, { useEffect, useState, useContext } from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import AddButton from "../AppButtons/CtaButton/AddButton";
import "./InviteTabContent.scss";
import { ProjectContext } from "../../../contexts/ProjectContext";
import { SharingContext } from "../../../contexts/SharingContext";
import { useAlert } from 'react-alert';
const InviteTabContent = (props) => {
  //Props
  const {resetModal} = props;

  //State
  const [openMenu, setOpenMenu] = useState(false);
  const [projectSelected, setProjectSelected] = useState(null);

  //Contexts
  const {projectState: {projects, projectActive}} = useContext(ProjectContext);

  const selectProject = (projectId) => {
    setProjectSelected(projects.find(({id})=> id === projectId));
  }

  return (
    <div className="invite__tab_content">
      {!openMenu && (
        <ul className="project__selections_list">
          {projects.map(project => {
            if(project.type==='DEFAULT' || project.id === projectActive.id) return;

            return (<ProjectSelectionItem 
              key={project.id}
              project={project}
              setOpenMenu={setOpenMenu} 
              selectProjectFunc={selectProject}
            />)
          })}
        </ul>
      )}

      {openMenu && 
      <ProjectCollaboratorsMenu 
        project={projectSelected} 
        setOpenMenu={setOpenMenu}
        selectProjectFunc={selectProject}
        resetModal={() => resetModal()} 
      />}
    </div>
  );
};

const ProjectSelectionItem = props => {
  const {id, name} = props.project;

  const handleOnClick = () => {
    props.selectProjectFunc(id);
    props.setOpenMenu(true);
  }
  return (
    <li
      className="project__selection_item"
      onClick={handleOnClick}
    >
      <FaUserAlt className="project__icon" />
      <span className="project__name">{name}</span>
    </li>
  );
};

const ProjectCollaboratorsMenu = props => {
  //Contexts
  const {projectState: {projectActive}} = useContext(ProjectContext);
  const {
    getCollaboratorsOfProject,
    inviteUser
  } = useContext(SharingContext);
  const alert = useAlert();

  //Props
  const {project, setOpenMenu, selectProjectFunc} = props;

  //State
  const [selectAll, setSelectAll] = useState(false);
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      if(!project) return;
      const data = await getCollaboratorsOfProject(project.id);
      const collaborators = data.map(({id, email}) => ({id, email, checked: false}));
      setCollaborators(collaborators);
    }
    fetchData();
  }, []);

  const setCheckedAll = () => {
    const newCollaborators = collaborators.map(collaborator => {
      return {...collaborator, checked: !selectAll};
    })
    
    setSelectAll(!selectAll);
    setCollaborators(newCollaborators);
  }

  const setChecked = (userId, checked) => {
    const newCollaborators = collaborators.map(collaborator => {
      if(collaborator.id===userId) {
        return {...collaborator, checked};
      }

      return {...collaborator};
    })
    setCollaborators(newCollaborators);
  }

  const invitedFromOtherProject = async () => {
    for(let collaborator of collaborators) {
      if(collaborator.checked)
        await inviteUser(projectActive.id, collaborator.id);
    }

    alert.show('Invite successfully', {
      type: 'success'
    })
    props.resetModal();
  }

  return (
    <div className="project__collaborators_menu">
      <div className="project__selection_item">
        <IoChevronBack
          className="back__icon"
          onClick={() => props.setOpenMenu(false)}
        />
        <FaUserAlt className="project__icon" />
        <span className="project__name">{project.name}</span>
      </div>
      <ul className="collaborator__selections_list">
        <label className="select__checkbox_container">
          {" "}
          Select All
          <input type="checkbox" onClick={setCheckedAll} />
          <span className="select__checkmark"></span>
        </label>
        {collaborators.map((collaborator)=> (
          <CollaboratorSelectionItem 
            key={collaborator.id}
            collaborator={collaborator}
            setChecked={setChecked}
          />
        ))}
      </ul>
      <div className="cta__btn_wrapper">
        <AddButton 
          btnName={"Invite"} 
          available={true} 
          handleOnClick={invitedFromOtherProject}/>
      </div>
    </div>
  );
};

const CollaboratorSelectionItem = props => {
  const {id, email, checked} = props.collaborator;
  const {setChecked} = props;

  return (
    <li
      className="collaborator__selection_item collaborator__info_wrapper"
      onClick={() => setChecked(id, !checked)}
    >
      <label className="select__checkbox_container">
        <input type="checkbox" checked={checked} />
        <span className="select__checkmark"></span>
        <div className="collaborator__avatar">
          <FaUserCircle style={{ color: "red", fontSize: "27px" }} />
        </div>
      </label>
      <div className="collaborator__info">
        <div className="collaborator__name_wrapper">
          <div className="collaborator__name">{email.replace('@gmail.com', '')}</div>
          <div className="collaboration__status collaborating">pending</div>
        </div>
        <div className="collaborator__email">@gmail.com</div>
      </div>
    </li>
  );
};

export default InviteTabContent;
