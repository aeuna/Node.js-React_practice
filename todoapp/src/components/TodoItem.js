import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text, checked, id, onToggle, onRemove, color } = this.props
        console.log(id)

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation() // onToggle이 실행되지 않도록 함 onRemove만 실행시키도록 이벤트의 확산을 막아줌
                    onRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`} style={{color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}

export default TodoItem

// text: todo 내용
// checked: 체크박스 상태
// id: todo 의 고유 아이디
// onToggle: 체크박스를 키고 끄는 함수
// onRemove: 아이템을 삭제시키는 함수