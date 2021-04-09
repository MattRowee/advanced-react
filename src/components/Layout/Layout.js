import React from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";
// import classes from '*.module.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
        </main>
  </Aux>
);

export default layout;
