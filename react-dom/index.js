const ReactDOM = {
    render
}

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

function render(vnode, container) {
    console.log(vnode)
    if(vnode === undefined) return;
    //如果vnode是字符串
    if(typeof vnode === 'string'){
        //创建文本节点
        const textNode = document.createTextNode(vnode);
        return container.appendChild(textNode);
    }

    //否则就是个虚拟DOM对象
    console.log("----v node is ---", vnode.tag, vnode.attrs)
    const {tag, attrs} = vnode; //解构vnode
    //创建节点对象
    const dom = document.createElement(tag);
    if(attrs){
        //有属性
        Object.keys(attrs).forEach(key=>{
            const value = attrs[key];
            setAttribute(dom, key, value)
        })
    }

    //递归--渲染子节点
    vnode.childrens.forEach(child=>render(child, dom))
    return container.appendChild(dom);

}

function setAttribute(dom, key, value) {
    //将className转为class
    if(key === 'className'){
        key = 'class';
    }

    //如果是事件，onClick，onBlur等
    if(/on\w+/.test(key)){
        //转小写
        key.toLowerCase();
        dom[key] = value || '';
    }else if(key === 'style'){
        if(!value || typeof value === 'string'){
            dom.style.cssText = value || '';
        }else if(value && typeof value === 'object'){
            //for example: {width:20}
            for(let k in value){
                if(typeof value[k] === 'number'){
                    dom.style[k] = value[k] + 'px';
                }else{
                    dom.style[k] = value[k]
                }
            }
        }
    }else if(key in dom){
        dom[key] = value || '';
    }if(value){
        dom.setAttribute(key, value);

    }else{
        dom.removeAttribute(key);
    }
}

export default ReactDOM