import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // line 7: extract all the property names of state.
  const transformedIngredients = Object.keys(props.ingredients)
    // map the object into an array of ingredients
    .map((igKey) => {
      return [...Array( props.ingredients[igKey] )].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
