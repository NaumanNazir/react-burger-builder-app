import React from 'react'

import Aux from '../../hoc/Auxx'
import classes from './Layout.module.css'

function layout(props) {
  return (
    <Aux>
      <div>
        Toolbar, sideDrawer, Backdrop
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout
