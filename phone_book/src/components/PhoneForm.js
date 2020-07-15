import React, { Component } from 'react'

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value //e.target.value값을 이용해서 input의 name속성을 통해 구별이 가능하다.
        })
    }
    handleSubmit = (e) => {
        e.preventDefault() //페이지 리로딩 방지
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone:''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름"
                value ={this.state.name}
                onChange={this.handleChange}
                name="name"
                />
                <input placeholder="전화번호"
                value ={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                />
                <button type="submit">등록</button>
                <div>{this.state.name} {this.state.phone}</div>
            </form>
        )
    }
}

export default PhoneForm
