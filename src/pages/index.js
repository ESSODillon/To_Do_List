import React from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Button, Grid, List } from "semantic-ui-react";
import Task from "../components/Task";
git;
import NewTaskForm from "../components/NewTaskForm";

const HomePage = () => {
  const [NewTaskOpen, setNewTaskOpen] = React.useState(true);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

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

        {NewTaskOpen ? <NewTaskForm closeNewTask={closeNewTask} /> : null}

        <List>
          <Task name="Task 1" color="yellow"></Task>
          <Task name="Task 2" color="red"></Task>
          <Task name="Task 3" color="green"></Task>
        </List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
