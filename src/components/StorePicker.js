/* eslint-disable */
import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

  goToStore(event){
    event.preventDefault()

  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
          <input type="text" required placeholder="Store Name" ref={(input) => {this.storeInput = input}} defaultValue={getFunName()}/>
          <button type="submit">Visit Store </button>
      </form>
    )
  }
}

export default StorePicker
