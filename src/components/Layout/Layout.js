import React from 'react'
import Aux from '../../hoc/Auxx'

function index() {
  return (
    <Aux>
      <div>
        Toolbar, sideDrawer, Backdrop
      </div>
      <main>
        {props.children}
      </main>
    </Aux>
  )
}

export default index
