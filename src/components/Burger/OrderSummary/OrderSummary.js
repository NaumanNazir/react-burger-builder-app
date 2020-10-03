import React from 'react'

import Aux from '../../../hoc/Auxx/Auxx'
import Button from '../../UI/Button/Button'

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
      <p><strong> Total: {props.price.toFixed(2)} </strong></p>
      <p> Continue to Checkout? </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}> CANCEL </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}> CONTINUE </Button>
    </Aux>
  )
}

export default OrderSummary
