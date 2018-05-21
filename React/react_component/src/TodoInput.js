import React , { Component } from 'react'

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    const inputValue = this.state.inputValue
    this.props.addTodo(inputValue)
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input placeholder="新規TODOを入力してください" value={this.state.inputValue} onChange={this.handleChange}　/>
        <button onClick={this.handleClick}>登録してください</button>
      </div>
    )
  }
}

export default TodoInput
