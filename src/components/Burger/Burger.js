import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import BurIngredient from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients! </p>
  }
  console.log(transformedIngredients)

  return (
    <div className={classes.Burger}>
      <BurIngredient type="bread-top" />
      { transformedIngredients}
      <BurIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger
