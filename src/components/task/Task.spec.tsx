import React from "react";
import { shallow, mount } from "enzyme";
import Task from "./Task";
import { tasks } from "mocks/mocks";

describe("Task component", () => {
  test("should component is instantiated correctly", () => {
    const [task] = tasks;
    const component = shallow(<Task index={0} task={task} />);
    expect(component).toBeDefined();
  });
});
