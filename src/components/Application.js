import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'
import CountDown from './CountDown'
import NewItem from './NewItem'
import Items from './Items'

import './Application.css'
import PackedItemsContainer from '../containers/PackedItemsContainer'
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer'

class Application extends Component {
  addItem = item => {
    this.setState({ items: [item, ...this.state.items] })
  }

  removeItem = item => {
    this.setState({
      items: this.state.items.filter(other => other.id !== item.id),
    })
  }

  markAsPacked = item => {
    const otherItems = this.state.items.filter(other => other.id !== item.id)
    const updatedItem = { ...item, packed: !item.packed }
    this.setState({ items: [updatedItem, ...otherItems] })
  }

  markAllAsUnpacked = () => {
    const items = this.state.items.map(item => ({ ...item, packed: false }))
    this.setState({ items })
  }

  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <CountDown {...this.state} />
        <UnpackedItemsContainer title="Unpacked Items" />
        <PackedItemsContainer title="Packed Items" />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    )
  }
}

export default Application

// onCheckOff={this.markAsPacked}
// onRemove={this.removeItem}
