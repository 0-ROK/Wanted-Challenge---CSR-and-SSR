import React from "react";

type Props = {
  children: Array<React.FC>;
};

const Router: React.FC<Props> = ({ children }) => {
  console.log(children);
  console.log(typeof children);
  // console.log(location);

  switch (location.pathname) {
    case "/":
      for (let i = 0; i <= children.length; i++) {
        if (children[i].props.path === "/") {
          return children[i].props.component;
        }
      }

    case "/about":
      for (let i = 0; i <= children.length; i++) {
        if (children[i].props.path === "/about") {
          return children[i].props.component;
        }
      }

    default:
      for (let i = 0; i <= children.length; i++) {
        if (children[i].props.path === "/") {
          return children[i].props.component;
        }
      }
  }
};

export default Router;
