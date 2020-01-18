import React from "react";
import { shallow } from "enzyme";
import Column from "./Column";
import { column, tasks } from "../../mocks/mocks";

describe("Column component", () => {
  test("should component is instantiated correctly", () => {
    const component = shallow(<Column column={column} tasks={tasks} />);
    expect(component).toBeDefined();
  });
});
