import React from "react";
import { shallow } from "enzyme";
import Example, {HelloWorld} from "./Example";

describe("Example component", () => {
  test("should be defined", () => {
    const component = shallow(<Example />);
    expect(component).toBeDefined();
  });

  test("should have hello world defined", () => {
      expect(HelloWorld()).toEqual("Hello World")
  })
});
