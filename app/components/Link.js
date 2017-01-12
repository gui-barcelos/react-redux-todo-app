import React, { PropTypes } from 'react'

class Link extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { active, children, onClickFilter } = this.props

        if (active) {
            return (
                <span>{children}</span>
            )
        }

        return (
            <a href='#'
                onClick={e => {
                    e.preventDefault()
                    onClickFilter()
                } }>
                {children}
            </a>
        )
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClickFilter: PropTypes.func.isRequired
}

export default Link