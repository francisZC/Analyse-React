const React = {
    createElement
}

function createElement(tag, attrs, ...childrens) {
    return{
        tag,
        attrs,
        childrens
    }
}
const ele = (
    <div className="active" title="123">
        hello, <span>react</span>
    </div>
)

console.log(ele)

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