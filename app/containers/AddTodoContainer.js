import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.input = ''
    }

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault()
                if (!this.input.value.trim()) {
                    return
                }

                this.props.dispatch(addTodo(this.input.value))

                this.input.value = ''
            } }>
                <div>
                    <div>
                        <input ref={
                            node => {
                                this.input = node
                            } }
                            type="text" placeholder="Something To Do..." />
                    </div>
                    <div >
                        <button type='submit'>Add Todo</button>
                    </div>
                </div>
            </form>
        );
    }
}

AddTodoContainer = connect()(AddTodoContainer)

export default AddTodoContainer