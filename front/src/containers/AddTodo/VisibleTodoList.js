import { connect } from 'react-redux'
import { toggleTodo } from '../../actions/actionTodo'
import TodoList from '../../components/Todo/TodoList'

const getVisibleTodos = (todos) => {
      return todos
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)