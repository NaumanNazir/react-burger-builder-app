import React from 'react'

import classes from './Order.module.css'

function Order(props) {
  return (
    <div className={classes.Order}>
      <p> Ingredients: Salad(1) </p>
      <p> Price: <strong> USD 5.20 </strong> </p>
    </div>
  )
}

export default Order
