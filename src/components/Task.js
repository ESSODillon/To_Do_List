import React from "react";
import { List, Grid, Label, Button, Flag } from "semantic-ui-react";

const Task = ({ name, color, openEditor, deleteTask, index, flag }) => {
  function editCurrentTask() {
    openEditor(index);
  }

  function deleteCurrentTask() {
    deleteTask(index);
  }

  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="2">
          <Grid.Column>
            <Label color={color} size="large">
              {name}
              <Flag name={flag}></Flag>
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              onClick={deleteCurrentTask}
              icon="trash"
              color="red"
            ></Button>
            <Button
              onClick={editCurrentTask}
              icon="pencil"
              color="orange"
            ></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    </React.Fragment>
  );
};

export default Task;
