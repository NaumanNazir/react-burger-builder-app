import React, { Component } from 'react'

import Aux from '../Auxx/Auxx'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  SideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !this.state.showSideDrawer
      }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar DrawerToggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
