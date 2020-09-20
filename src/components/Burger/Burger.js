import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import BurIngredient from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
  return (
    <div className={classes.Burger}>
      <BurIngredient type="bread-top" />
      <BurIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger
