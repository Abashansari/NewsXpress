import React, { Component } from 'react'
import loading from '../assets/images/loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt='loading' />
      </div>
    )
  }
}
