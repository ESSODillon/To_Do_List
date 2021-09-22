import React from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Button, Grid, List } from "semantic-ui-react";
import Task from "../components/Task";
import NewTaskForm from "../components/NewTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
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

  function showNewTaskOpen() {
    console.log(NewTaskOpen);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(NewTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  // const taskList = [];

  // list.forEach((task, index) => {
  //   taskList.push(
  //     <Task
  //       key={`${task.name}-${index}`}
  //       name={task.name}
  //       color={task.color}
  //     ></Task>
  //   );
  // });

  function editTask(index) {
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return {
        name: `Edit ${task.name}`,
        color: task.color,
      };
    });
    setList(newList);
  }

  function deleteTask() {
    // Array.filter is the solution for this
  }

  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        editTask={editTask}
        deleteTask={deleteTask}
        index={index}
      />
    );
  });

  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width="4">
            <Button icon="bars"></Button>
          </Grid.Column>
          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              Todo List
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
