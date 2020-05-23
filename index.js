import  React  from "./react";
import ReactDOM from "./react-dom"

const ele = (
    <div className="active" title="123">
        hello, <span>react</span>
    </div>
)

function Home(){
  return <div className="active" title="123">
            hello, <span>react</span>
        </div>
}
const title = 'active'
console.log(<Home name={title}/>)

ReactDOM.render(<Home name={title}/>, document.getElementById("box"))
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