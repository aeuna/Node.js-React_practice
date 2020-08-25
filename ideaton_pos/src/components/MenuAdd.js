import React, { Component } from 'react';

export default class MenuAdd extends Component {
  state = {
    name: '',
    price: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      price: '',
    });
  };

  render() {
    return (
      <>
        <h2>메뉴 추가</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='modal__container'>
            <input
              placeholder='이름'
              value={this.state.name}
              onChange={this.handleChange}
              name='name'
            />
          </div>
          <div className='modal__container'>
            <input
              placeholder='가격'
              value={this.state.price}
              onChange={this.handleChange}
              name='price'
            />
          </div>
          <br></br>
          <button type='submit'>등록</button>
        </form>
      </>
    );
  }
}
