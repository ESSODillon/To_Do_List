import React from "react";
import { Button, Input, Container } from "semantic-ui-react";

const EditTaskForm = ({
  taskName,
  color,
  setNewTask,
  editTask,
  NewTask,
  index,
}) => {
  function changeEditTask(e, { value, name }) {
    const editTaskClone = { ...NewTask };
    editTaskClone[name] = value;
    setNewTask(editTaskClone);

    editTask(index, value);
  }

  function submitEdits() {
    // editTask(index, "lol");
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
