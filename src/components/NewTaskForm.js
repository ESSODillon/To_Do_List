import React from "react";
import {
  Segment,
  Header,
  Form,
  Select,
  Button,
  Input,
} from "semantic-ui-react";

const NewTaskForm = ({ closeNewTask, NewTask, setNewTask, addNewTask }) => {
  function changeNewTask(e, { value, name }) {
    const newTaskClone = { ...NewTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);
  }

  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">New Task</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="Enter task name..."
            value={NewTask.name}
            onChange={changeNewTask}
            name="name"
          />
          <Form.Field
            control={Select}
            label="Task Color"
            placeholder="Choose task color..."
            options={[
              { text: "Red", value: "red" },
              { text: "Orange", value: "orange" },
              { text: "Yellow", value: "yellow" },
              { text: "Green", value: "green" },
              { text: "Blue", value: "blue" },
              { text: "Purple", value: "purple" },
              { text: "Teal", value: "teal" },
              { text: "Pink", value: "pink" },
            ]}
            value={NewTask.color}
            onChange={changeNewTask}
            name="color"
          />
          <Form.Field
            control={Select}
            label="Flag Name"
            placeholder="Choose a flag..."
            options={[
              { text: "United States", value: "us" },
              { text: "United Kingdom", value: "uk" },
              { text: "Australia", value: "au" },
              { text: "Russia", value: "ru" },
              { text: "China", value: "cn" },
              { text: "Ireland", value: "ie" },
            ]}
            value={NewTask.flag}
            onChange={changeNewTask}
            name="flag"
          />
          <Button.Group fluid>
            <Button onClick={closeNewTask} type="button" color="google plus">
              Cancel
            </Button>
            <Button.Or></Button.Or>
            <Button onClick={addNewTask} type="button" color="olive">
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default NewTaskForm;
