import React, { useRef,useState, useEffect, useContext } from "react";
import { VscComment } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import moment from "moment";
import ProjectSection from "./ProjectSection/ProjectSection";
import ProjectTask from "./ProjectTask/ProjectTask";
import CommentButton from "./AppButtons/ContentButton/CommentButton";
import ShareButton from "./AppButtons/ContentButton/ShareButton";
import SortButton from "./AppButtons/ContentButton/SortButton";
import ConfigButton from "./AppButtons/ContentButton/ConfigButton";
import AddSectionButton from "./AppButtons/AddButton/AddSectionButton";
import FullAddSectionButton from "./AppButtons/AddButton/FullAddSectionButton";
import AddTaskButton from "./AppButtons/AddButton/AddTaskButton";
import buildCalendar, { isPrevTaskBtnAvailable } from "@helpers/CalendarHelper";
import PrevButton from "./AppButtons/TaskButton/PrevButton";
import NextButton from "./AppButtons/TaskButton/NextButton";
import TodayButton from "./AppButtons/TaskButton/TodayButton";
import CalendarMenu from "./AppMenus/CalendarMenu";
import CalendarTab from "./AppTabs/CalendarTab";
import contentStyles from "./AppContentStyles";
import "./AppContent.scss";
import {ProjectContext} from '../../contexts/ProjectContext';
import {SectionContext} from '../../contexts/SectionContext';
import {TaskContext} from '../../contexts/TaskContext';
import SortBar from "./AppBars/SortBar";

const AppContent = props => {
  //Context
  const {
    projectState: {projectActive},
    showCompleted
  } = useContext(ProjectContext);
  const {
    sectionState: {sections},
    setSections,
    setSectionsOfToday,
    setSectionsOfUpcoming
  } = useContext(SectionContext);

  const {
    taskState: {tasks},
    setTasksOfProject,
    setTasksOfToday,
    updateTasks,
    updateTask,
  } = useContext(TaskContext);
  
  const contentElement = document.getElementById("content__wrapper");
  const contentRef = useRef(null);
  const contentHeaderRef = useRef(null);
  const contentBodyRef = useRef(null);
  const [listView, setListView] = useState(true);
  const [defaultProject, setDefaultProject] = useState("");
  const [borderHeader, setBorderHeader] = useState(false);
  const [activeAddTask, setActiveAddTask] = useState(false);
  const [calendar, setCalendar] = useState([]);
  const [curWeek, setCurWeek] = useState([]);
  const [curMonthStr, setCurMonthStr] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [updateCurWeek, setUpdateCurWeek] = useState(false);
  const [value, setValue] = useState(moment());
  const [scrollToSection, setScrollToSection] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSortBar, setActiveSortBar] = useState(false);

  useEffect(() => {
    setCalendar(buildCalendar(moment()));
  }, []);

  useEffect(() => {
    if (calendar[0]) {
      setCurWeek([...calendar[0][0]]);
    }
  }, [calendar[0]]);

  useEffect(() => {
    let day = value.clone().subtract(1, "day");

    if (!day.isSame(curWeek[0], "week")) {
      day = day.startOf("week");
      setCurWeek(curWeek.map(() => day.add(1, "day").clone()));
    }
  }, [value]);

  useEffect(() => {
    if (updateCurWeek && weekOffset !== 0) {
      setCurWeek(curWeek.map(day => day.clone().add(weekOffset, "week")));
      setUpdateCurWeek(false);
    }
  }, [updateCurWeek]);

  useEffect(() => {
    if (curWeek[0]) {
      setCurMonthStr(curWeek[0].format("MMM YYYY"));
    }
  }, [curWeek]);

  useEffect(() => {
    if (scrollToSection) {
      const valueElement = document.getElementById(
        "section " + value.format("D MMM YY")
      );
      const offset =
        valueElement.offsetTop - contentHeaderRef.current.scrollHeight;
      contentElement.scrollTo(0, offset);
      setScrollToSection(false);
    }
  }, [scrollToSection]);

  function getSectionHeight() {
    return contentBodyRef.current.offsetHeight;
  }

  function handleOnScroll() {
    if (contentRef.current.scrollTop === 0) {
      setBorderHeader(false);
    } else {
      setBorderHeader(true);
    }
  }

  let projectName, projectId, projectType, projectView;
  if(projectActive) {
    projectId = projectActive.id;
    projectName = projectActive.name;
    projectView = projectActive.view;
    projectType = projectActive.type;
  }
  useEffect(() => {
    if (!projectName || !projectId) return;

    const fetchData = async () => {
      
      if(projectName === 'Today' && projectType==='DEFAULT') {
        setDefaultProject("Today");
        setSectionsOfToday(projectId);
        await setTasksOfToday();
      }
      else if (projectName === 'Upcoming' && projectType==='DEFAULT') {
        setDefaultProject("Upcoming");
        setSectionsOfUpcoming(projectId);
        await setTasksOfToday();
      }
      else {
        if(projectName === 'Inbox' && projectType === 'DEFAULT') {
          setDefaultProject("Inbox");
        }
        else setDefaultProject("");
        await setSections(projectId);
        await setTasksOfProject(projectId);
      }
    }
    fetchData();

    return () => {
      setTasksOfProject(null);
      setSections(null);
      setDefaultProject("");
    }
  },[projectId, projectName]);

  useEffect(() => {
    if(!projectView) return;

    if(projectView === 'LIST' || defaultProject==='Today' || defaultProject==='Upcoming')
      setListView(true);
    else 
      setListView(false);
  },[projectView, defaultProject]);

  //Drop and drag
  const onDragEndToday = (result) => {
    if(!result.destination) return;
    const droppableSection = result.destination.droppableId;
    const overdueSection = sections.find(section => section.name === 'Overdue');
    const desSection = sections.find(section => section.id === droppableSection);

    if(droppableSection === overdueSection.id) return;  
    let items = [...tasks];
    const srcIndex = items.findIndex(({id}) => id===result.draggableId);
    const [reorderItem] = items.splice(srcIndex, 1);
    const updatedTask = {
      ...reorderItem, 
      dueDate: desSection.date,
    };
    items.push(updatedTask);
    const update = async() => {
      updateTasks(items);
      await updateTask(updatedTask.sectionId, updatedTask);
    }
    update();
  }

  const onDragEndUpcoming = (result) => {
    if(!result.destination) return;

    let items = [...tasks];
    const srcIndex = items.findIndex(({id}) => id===result.draggableId);
    const [reorderItem] = items.splice(srcIndex, 1);

    const updatedTask = {
      ...reorderItem,
      dueDate: result.destination.droppableId,
    };
    items.push(updatedTask)

    const update = async() => {
      updateTasks(items);
      await updateTask(updatedTask.sectionId, updatedTask);
    }
    update();
  }

  const onDragEndSection = (result) => {
    console.log(result);
    if(!result.destination) return;
    let items = [...tasks];

    const srcDroppableId = result.source.droppableId;
    const desDroppableId = result.destination.droppableId;

    const srcIndex = items.findIndex(({id, sectionId}) => id===result.draggableId);
    const [reorderItem] = items.splice(srcIndex, 1);

    let idx=-1;
    const desIndex = items.findIndex(({id, sectionId}) => {
      if(desDroppableId === sectionId) idx+=1;
      if(idx===result.destination.index) return true;
      return false;
    })

    const filterItems = items.filter(({sectionId}) => sectionId === desDroppableId);
    const lastItem = filterItems[filterItems.length - 1];
     
    const updatedTask ={ 
      ...reorderItem, 
      sectionId: result.destination.droppableId, 
      ordinalNum: lastItem.ordinalNum+1,
    }
    items.splice(desIndex, 0, updatedTask);

    console.log(updatedTask);
    const update = async () => {
      updateTasks(items);
      await updateTask(srcDroppableId, updatedTask);
    }
    update();
  }

  return (
  <>
    {!projectActive && <div>Loading....</div>}
    {
    projectActive && 
    <section
      id="app__content"
      className={
        props.activeSidebar
          ? `${contentStyles(defaultProject, listView)} with__sidebar`
          : `${contentStyles(defaultProject, listView)}`
      }
    >
      <div
        className="content__wrapper"
        id="content__wrapper"
        ref={contentRef}
        onScroll={() => handleOnScroll()}
      >
        <div
          className={
            borderHeader ? "content__header with__border" : "content__header"
          }
          ref={contentHeaderRef}
        >
          {defaultProject==='Upcoming' ? (
            <div className="content__header_wrapper">
              <div className="content__title_wrapper">
                <div
                  className="content__title"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  {curMonthStr}
                  <span>
                    <MdKeyboardArrowDown className="icon gray__icon" />
                  </span>
                </div>
                {activeMenu && (
                  <CalendarMenu
                    setActive={setActiveMenu}
                    calendar={calendar}
                    value={value}
                    setValue={setValue}
                    setScrollToSection={setScrollToSection}
                  />
                )}
              </div>
              <div className="content__buttons_wrapper">
                <PrevButton
                  curWeek={curWeek[0]}
                  isAvailable={isPrevTaskBtnAvailable}
                  setUpdateCurWeek={setUpdateCurWeek}
                  setWeekOffset={setWeekOffset}
                />
                <NextButton
                  setUpdateCurWeek={setUpdateCurWeek}
                  setWeekOffset={setWeekOffset}
                />
                <TodayButton
                  today={moment()}
                  setValue={setValue}
                  setScrollToSection={setScrollToSection}
                />
              </div>
            </div>
          ) : (
            <div className="content__header_wrapper">
              <div className="content__title_wrapper">
                <p className="content__title">{projectName}</p>
                {defaultProject==='Today' && (
                  <p className="date">{moment().format("ddd D MMM")}</p>
                )}
              </div>
              <div className="content__buttons_wrapper">
                <CommentButton full={true} />
                {defaultProject!=='Inbox' && <ShareButton full={true} />}
                <SortButton full={true} />
                <ConfigButton projectBtn={true} project={projectActive} inboxProject={defaultProject==='Inbox'} />
              </div>
            </div>
          )}
          {defaultProject==='Upcoming' && (
            <div className="content__header_wrapper">
              <div className="calendar__tabs_container">
                {curWeek.map(day => (
                  <CalendarTab
                    key={day.format("ddd D")}
                    day={day}
                    value={value}
                    setValue={setValue}
                    setScrollToSection={setScrollToSection}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="content__body" ref={contentBodyRef}>
          {activeSortBar && <SortBar setActive={setActiveSortBar} />}
          {listView && (defaultProject!=='Upcoming') && (defaultProject!=='Today') && (
            <div className="content__task_input">
              <AddTaskButton
                btnName={"task"}
                activeAddTask={activeAddTask}
                setActiveAddTask={setActiveAddTask}
                sectionId={projectId}
              />
            </div>
          )}
          {/* {listView && (defaultProject!=='Upcoming' ) && (defaultProject!=='Today') && (
            <div className="content__section_input">
              <AddSectionButton listView={listView} />
            </div>
          )} */}
          {listView && (defaultProject!=='Upcoming') && (
          <DragDropContext onDragEnd={(defaultProject==='Today')? onDragEndToday : onDragEndSection}>
            <div className="project__section_list">
              <div className="project__section_item">
                {sections.map(section => {
                  if(section.type!=='ARCHIVED'){
                    const filterTasks = tasks.filter(task => {
                      if(!showCompleted && task.type==='COMPLETED') return false;
                      if(defaultProject==='Today') {
                        if(!task.dueDate) return false;
                        const dueDate = task.dueDate.slice(0, 10);
                        const yyyy = new Date().getFullYear();
                        const mm = `0${new Date().getMonth()+1}`.slice(-2);
                        const dd = `0${new Date().getDate()}`.slice(-2);
                        const now = `${yyyy}-${mm}-${dd}`;
                        
                        if((!section.date && dueDate < now) || (section.date && dueDate === section.date.slice(0,10)))
                          return true;
                      }
                      else if(task.sectionId === section.id)
                        return true;
                    })
                    return (
                    <Droppable key={section.id} droppableId={section.id}>
                    {provided => (
                    <>
                      <ProjectSection
                        sectionProp={section}
                        upcoming={false}
                        getHeight={getSectionHeight}
                        listView={listView}
                        activeAddTask={activeAddTask}
                        setActiveAddTask={setActiveAddTask}
                        numIncompletedTasks={filterTasks.length}
                        haveAddTask={(defaultProject!=='Today') || (defaultProject==='Today' && section.name!=='Overdue')}
                        provided={provided} 
                        innerRef={provided.innerRef}
                      >
                      {
                        filterTasks.map((task,index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                          {provided => (
                          <ProjectTask 
                              taskProp={task} 
                              listView={true}
                              provided={provided}
                              innerRef={provided.innerRef} />)}
                          </Draggable>
                        ))
                      }
                      {provided.placeholder}
                      </ProjectSection>
                      {(defaultProject!=='Upcoming') &&(defaultProject!=='Today') && (
                        <div className="content__section_input">
                          <AddSectionButton listView={listView} />
                        </div>
                      )}
                    </>
                    )}
                    </Droppable>)
                  }
                })}
              </div>
            </div>
          </DragDropContext>
          )}
          {(defaultProject==='Upcoming') && (
          <DragDropContext onDragEnd={onDragEndUpcoming}>
            <div className="project__section_list">
              {calendar.map((month, idx) => {
                const curMonthVar = moment().add(idx, "month");
                return month.map(week =>
                  week.map(
                    day =>
                      !day.isBefore(moment().subtract(1, "day"), day) &&
                      day.isSame(curMonthVar, "month") && (
                      <Droppable 
                        key={`${day.format("YYYY-MM-DD")} 23:59:59`} 
                        droppableId={`${day.format("YYYY-MM-DD")} 23:59:59`}
                      >
                      {provided => (
                        <div
                          key={day.format("D MMM YY")}
                          className="project__section_item"
                          id={"section " + day.format("D MMM YY")}
                        >
                          <ProjectSection
                            sectionProp={
                              {id: projectId, 
                               name: day.isSame(moment(), "day")
                                ? "Today" + " · " + day.format("ddd D MMM")
                                : day.isSame(moment().add(1, "day"), "day")
                                ? "Tomorrow" + " · " + day.format("ddd D MMM")
                                : day.format("dddd") +
                                  " · " +
                                  day.format("ddd D MMM"), 
                               type: 'NORMAL',
                               date: `${day.format("YYYY-MM-DD")} 23:59:59`,
                              }}
                            upcoming={true}
                            haveAddTask={true}
                            getHeight={getSectionHeight}
                            listView={listView}
                            activeAddTask={activeAddTask}
                            setActiveAddTask={setActiveAddTask}
                            provided={provided} 
                            innerRef={provided.innerRef}
                          >
                            {tasks.map((task,index) => {
                              const dueDate = task.dueDate.slice(0, 10);
                              if(dueDate === day.format("YYYY-MM-DD"))
                                return (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                  {provided => (
                                  <ProjectTask
                                      taskProp={task} 
                                      listView={true}
                                      provided={provided}
                                      innerRef={provided.innerRef} />)}
                                </Draggable>
                                )
                            })}
                          {provided.placeholder}
                          </ProjectSection>
                        </div>
                      )}
                      </Droppable>
                    )
                  ) 
                )
              })}
            </div>
          </DragDropContext>)}
          {!listView && (
          <DragDropContext onDragEnd={onDragEndSection}>
            <div className="project__section_list">
              {sections.map(section => {
                if(section.type !== 'ARCHIVED') {
                  const filterTasks = tasks.filter(task => {
                    if(!showCompleted && task.type==='COMPLETED') return false;
                    if(task.sectionId === section.id)
                      return true;
                  })
                  if(section.type === 'NO_SECTION' && filterTasks.length<=0)
                    return;

                  return(
                  <div className="project__section_item" key={section.id}>
                    <div className="project__section_wrapper">
                      <Droppable droppableId={section.id}>
                      {provided => (
                        <ProjectSection
                          sectionProp ={section}
                          sectionTitle={section.name}
                          getHeight={getSectionHeight}
                          numIncompletedTasks={filterTasks.length}
                          provided={provided} 
                          innerRef={provided.innerRef}
                        > 
                          {filterTasks.map((task, index) => { 
                            return (
                              <Draggable key={task.id} draggableId={task.id} index={index}>
                                {provided => (
                                  <ProjectTask 
                                    key={task.id}
                                    taskProp={task}
                                    provided={provided}
                                    innerRef={provided.innerRef} 
                                  />)}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </ProjectSection>)}
                      </Droppable>
                    </div>
                  </div>)
                }
              })}
            </div>
          </DragDropContext>
          )}
          {!listView && <FullAddSectionButton />}
        </div>
      </div>
    </section>
    }
  </>
  );
};

export default AppContent;
