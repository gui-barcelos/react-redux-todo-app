import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickFilter: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLinkContainer