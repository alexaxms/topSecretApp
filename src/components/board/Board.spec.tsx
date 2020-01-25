import React from "react";
import { shallow } from "enzyme";
import Board from "./Board";

describe("Board component", () => {
  test("should component be instantiated correctly", () => {
    const component = shallow(<Board />);
    expect(component).toBeDefined();
  });

  test("should have onDragEnd defined", () => {
    const component: any = shallow(<Board />);
    expect(component.props().onDragEnd).toBeDefined();
    component.props().onDragEnd("call");
  });
});
