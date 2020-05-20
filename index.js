import  React  from "./react";
import ReactDOM from "./react-dom"

const ele = (
    <div className="active" title="123">
        hello, <span>react</span>
    </div>
)

ReactDOM.render(ele, document.getElementById("box"))
/**
 * createElement(tag, attrs, child1,child2,......)
 */

/** 通过babel转义的ele
 * var ele = React.createElement(
  "div",
  {
    className: "active",
    title: "123"
  },
  "hello, ",
  React.createElement("span", null, "react")
);
 */