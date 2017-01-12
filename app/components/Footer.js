import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p>
                Show: {" "}
                <FilterLinkContainer filter='SHOW_ALL'>
                    All
                </FilterLinkContainer>
                {", "}
                <FilterLinkContainer filter='SHOW_ACTIVE'>
                    Active
                </FilterLinkContainer>
                {", "}
                <FilterLinkContainer filter='SHOW_COMPLETED'>
                    Inactive
                </FilterLinkContainer>
            </p>
        )
    }
}

export default Footer