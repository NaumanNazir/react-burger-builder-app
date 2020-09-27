import React from 'react'

import Aux from '../../hoc/Auxx'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

function layout(props) {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout
