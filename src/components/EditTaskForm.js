import React from "react";
import { Button, Input, Container } from "semantic-ui-react";

const EditTaskForm = ({ taskName, setNewTask, editTask, NewTask, index }) => {
  const editTaskClone = { ...NewTask };

  function changeEditTask(e, { value, name }) {
    editTaskClone[name] = value;
    setNewTask(editTaskClone);
  }

  function submitEdits() {
    editTask(index, editTaskClone.name);
  }

  return (
    <React.Fragment>
      <Container>
        <Input
          onChange={changeEditTask}
          defaultValue={taskName}
          name="name"
        ></Input>
        <Button
          onClick={submitEdits}
          type="button"
          color="green"
          icon="check"
        ></Button>
      </Container>
    </React.Fragment>
  );
};

export default EditTaskForm;
