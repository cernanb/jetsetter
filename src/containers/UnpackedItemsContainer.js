import { connect } from 'react-redux'
import Items from '../components/Items'
import { toggleItem, removeItem } from '../actions/items-actions'

const mapStateToProps = state => {
  return {
    items: state.items.filter(item => !item.packed),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckOff(id) {
      dispatch(toggleItem(id))
    },
    onRemove(id) {
      dispatch(removeItem(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
