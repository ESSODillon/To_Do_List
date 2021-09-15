import React from "react";
import { Segment, Header, Form, Select, Button } from "semantic-ui-react";

const NewTaskForm = ({ closeNewTask }) => {
  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">New Task</Header>
        <Form>
          <Form.Field
            control="input"
            label="Task Name"
            placeholder="Enter task name..."
          />
          <Form.Field
            control={Select}
            label="Task Color"
            placeholder="Choose task color..."
            options={[
              { text: "Red", value: "red" },
              { text: "Yellow", value: "yellow" },
              { text: "Green", value: "green" },
            ]}
          />
          <Button.Group fluid>
            <Button onClick={closeNewTask} type="button" color="google plus">
              Cancel
            </Button>
            <Button.Or></Button.Or>
            <Button type="button" color="olive">
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default NewTaskForm;
