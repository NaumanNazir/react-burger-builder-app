import React from 'react'

import Aux from '../../../hoc/Auxx'

function OrderSummary(props) {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(ingreKey => {
      return (
        <li key={ingreKey}>
          <span style={{ textTransform: 'capitalize' }}> {ingreKey}: </span>
          { props.ingredients[ingreKey]}
        </li>
      )
    })
  return (
    <Aux>
      <h3> Your Order </h3>
      <p> A delicious burger with the following ingredients </p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p> Continue to Checkout? </p>
    </Aux>
  )
}

export default OrderSummary
