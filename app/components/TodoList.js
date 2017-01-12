import React, { PropTypes } from 'react'
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {todos, onClickTodo} = this.props
        return (
            <ul>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => onClickTodo(todo.id)} />
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    })),
    onClickTodo: PropTypes.func.isRequired
}

export default TodoList