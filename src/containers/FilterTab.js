import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/ui/tab/Tab'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterTab
