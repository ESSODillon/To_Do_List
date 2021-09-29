import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Header,
  Container,
  Button,
  Grid,
  List,
  Image,
} from "semantic-ui-react";
import Task from "../components/Task";
import NewTaskForm from "../components/NewTaskForm";
import EditTaskForm from "../components/EditTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "Walk the dog",
    color: "purple",
    flag: "cn",
  };

  const [NewTaskOpen, setNewTaskOpen] = React.useState(true);
  const [NewTask, setNewTask] = React.useState(initialNewTask);

  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(NewTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  function editTask(index, value) {
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return {
        // trying to insert an object???
        name: value,
        color: task.color,
        flag: task.flag,
      };
    });
    setList(newList);
  }

  function openEditor(index) {
    const editor = list.map((task, i) => {
      if (i !== index) return task;

      return {
        name: (
          <EditTaskForm
            taskName={task.name}
            setNewTask={setNewTask}
            editTask={editTask}
            NewTask={NewTask}
            index={index}
          ></EditTaskForm>
        ),
        color: task.color,
      };
    });
    setList(editor);
  }

  function deleteTask(index) {
    // Array.filter is the solution for this
    const newList = list.filter((task, i) => {
      if (i !== index) return task;
    });
    setList(newList);
  }

  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        flag={task.flag}
        openEditor={openEditor}
        deleteTask={deleteTask}
        index={index}
      />
    );
  });

  return (
    <React.Fragment>
      <br></br>
      <Container>
        <Image
          src="http://www.workflowmax.com/hubfs/6-things-to-do-list.png"
          size="medium"
          centered
        />
        <br></br>
        <Grid>
          <Grid.Column width="4">
            <Button icon="bars"></Button>
          </Grid.Column>
          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              To Do List
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right" width="4">
            <Button
              color="instagram"
              icon="plus"
              onClick={openNewTask}
            ></Button>
          </Grid.Column>
        </Grid>

        {/* Conditional (ternary) operator */}
        {/* Condition ? True : False */}
        {NewTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            NewTask={NewTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          />
        ) : null}

        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
