import React, { Component } from 'react';
// import PosForm from './PosForm';
import PosList from './PosList';
import PosNavbar from '../Navbar/PosNavbar';
import ReceiptList from '../Receipt/ReceiptList';
import './Pos.css';

class Pos extends Component {
  id = 6;
  state = {
    information: [
      {
        id: 0,
        name: '떡볶이',
        price: '2500',
      },
      {
        id: 1,
        name: '순대',
        price: '3000',
      },
      {
        id: 2,
        name: '참치마요컵밥',
        price: '3500',
      },
      {
        id: 3,
        name: '튀김세트',
        price: '5000',
      },
      {
        id: 4,
        name: '사이다',
        price: '1000',
      },
      {
        id: 5,
        name: '콜라',
        price: '1000',
      },
    ],
    menu: [],
  };
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    });
  };

  handleData = (data) => {
    // console.log(data);
    this.handleCreate(data);
  };

  handleGetInfo = (data) => {
    const { menu } = this.state;

    this.setState({
      menu: menu.concat({
        id: this.id++,
        name: data.name,
        price: data.price,
        value: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <PosNavbar getData={this.handleData} />
        <div className='container_content'>
          {/* <Receipt godata={this.state.menu}/> */}
          <ReceiptList data={this.state.menu} />
          <PosList data={this.state.information} getInfo={this.handleGetInfo} />
        </div>
      </div>
    );
  }
}

export default Pos;
