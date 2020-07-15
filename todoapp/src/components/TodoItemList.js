//우리가 곧 이어 만들 TodoItem컴포넌트 여러개를 렌더링 해주는 역할
//Template컴포넌트를 만들었기 때문에 이 컴포넌트에서는 스타일링 할건 없다
import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render() {
        const { todos, onToggle, onRemove } = this.props
        const todoList = todos.map(
            ({ id, text, checked, color }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    color = {color}
                    key={id}
                />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList

//todos :todo객체들이 들어있는 배열
//onToggle : 체크박스를 키고 끄는 함수
//onRemove : 아이템을 삭제시키는 함수