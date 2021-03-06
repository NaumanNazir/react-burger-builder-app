import React, { Component } from 'react'

import Order from '../../components/Order/Order'
import axios from './../../axios-order'
import withErrorHandler from '../../hoc/withErrorhandler/withErrorHandler'

class Orders extends Component {
  state = {
    ordres: [],
    loading: true
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(response => {
        const fetchedOrders = []
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({
          loading: false,
          orders: fetchedOrders
        })
      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })
  }

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)
