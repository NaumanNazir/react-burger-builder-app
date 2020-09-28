import React from 'react'

import Aux from '../../hoc/Auxx'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

function layout(props) {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout
