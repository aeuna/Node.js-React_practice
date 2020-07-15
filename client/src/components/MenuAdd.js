import React, { Component } from 'react'

export default class MenuAdd extends Component {
    state = {
        name: '',
        price: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
          name: '',
          price: ''
        })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="가격"
                    value={this.state.price}
                    onChange={this.handleChange}
                    name="price"
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}
