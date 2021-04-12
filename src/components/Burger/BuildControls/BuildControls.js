import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];
// controls constant is part of this file, call map, map each element to a <BuildControl> w/ required key
const buildControls = (props) => 
    <div className={classes.BuildControls}>
        
        {controls.map(ctrl => (
           <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>;

export default buildControls;
