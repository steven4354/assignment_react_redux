//*redux store connection stuff
import {connect} from 'react-redux'
import {createItem, purchaseItem, updateItem} from '../actions'
import {bindActionCreators} from 'redux'
import GroceryList from '../components/GroceryList'

//*redux store connection stuff
const mapStateToProps = (state) => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    items: state.items
  }
}

//*redux store connection stuff
// With bindActionCreators()
// Import the helper function

const mapDispatchToProps = (dispatch) => {
  // Create an object with the action creators
  // (or, import them as a named object)
  const actions = {createItem, purchaseItem, updateItem}

  // Returns exactly the same code as above
  return bindActionCreators(actions, dispatch)
}

//*redux store connection stuff
const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

export default GroceryListContainer
