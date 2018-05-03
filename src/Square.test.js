import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { Square } from "./Square";

it("renders without crashing", () => {
    const div = document.createElement("div");

    // this renders/starts child components
    ReactDOM.render(<Square />, div);
});

it("renders without crashing - isolated", () => {
    // this does not start any child components
    shallow(<Square />);
});

it("renders without crashing", () => {
    // this renders/starts child components
    mount(<Square />);
});

it("sqaure renders value", () => {
    const v = "X";
    const wrapper = shallow(<Square value={v} />);
    expect(wrapper.text()).to.equal(v);
});

it("sqaure shows empty string if value property is null", () => {
    const wrapper = shallow(<Square value={null} />);
    expect(wrapper.text()).to.equal("");
});

it("clicking button in square executes callback", () => {
    const callback = sinon.spy();

    // this also renders/starts any child components
    const wrapper = shallow(<Square value="X" onClickSquare={callback} />);

    wrapper.find("button").simulate("click");
    expect(callback).to.have.property("callCount", 1);
});
