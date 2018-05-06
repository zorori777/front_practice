import { connect } from 'react-redux';
import * as actions from '../actions/Todo';
import Todo from '../components/Todo'

// componentで使用するためにstateをpropsに変換する関数
const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
}

// dispatchですべてのreducerが呼ばれる

const mapDispatchToProps = dispatch => {

  return {
    addTodo: (todo) => dispatch(actions.addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
