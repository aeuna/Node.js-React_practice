import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';


const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']

class App extends Component {

  id = 3 
  state = {
    input: '',
    todos: [
      { id: 0, text: ' react 소개', checked: false },
      { id: 1, text: ' js 소개', checked: true },
      { id: 2, text: ' node 소개', checked: false }
    ],
    color : '#343a40'

  }
  handleChange = (e) => {
    this.setState({
      input : e.target.value //input 의 다음 바뀔 값
    })
  }

  handleCreate = () => {
    const { input, todos, color} = this.state
    this.setState({
      input: '',
      todos: todos.concat({
        id : this.id ++,
        text: input,
        checked: false,
        color
      })
    })
  }

  handleKeyPress = (e) => { //엔터시 handleCreate호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state
    //파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾는다
    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index] //선택한 id를 가지고 있는 객체
    const nextTodos = [...todos] //todos배열을 복사해서 nextTodos에게!!

    nextTodos[index] = { //선택한 id를 가진 객체를 복사하고, checked값을 덮어 쓰는것이여!!
      ...selected,
      checked: !selected.checked
    }
    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleChangeColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const {input,todos,color} = this.state
    const{
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleChangeColor
    } = this
    return (
      <TodoListTemplate  Palette = {(<Palette colors={colors} onSelect={handleChangeColor} selected={color}/>)} form={(
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        color={color}
      />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} color={color}/>
      </TodoListTemplate>
    );
  }
}

export default App;