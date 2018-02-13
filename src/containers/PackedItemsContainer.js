import { connect } from 'react-redux'
import Items from '../components/Items'
import { toggleItem, removeItem } from '../actions/items-actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
  return {
    items: state.items.filter(
      item => item.packed && item.value.includes(state.filter.packedItemsFilter)
    ),
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
