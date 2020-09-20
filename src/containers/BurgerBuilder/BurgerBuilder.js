import React, { Component } from 'react'

import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'

export class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div> Build controls </div>
      </Aux>
    )
  }
}

export default BurgerBuilder
