import React, { Component } from 'react';
// import PosForm from './PosForm';
import PosList from './PosList';
import PosNavbar from '../Navbar/PosNavbar';
import ReceiptList from '../Receipt/ReceiptList'
import './Pos.css'

class Pos extends Component {
  id = 6
  state = {
    information: [
      {
        id: 0,
        name: '떡볶이',
        price: '2000'
      },
      {
        id: 1,
        name: '순대',
        price: '3000'
      },
      {
        id: 2,
        name: '튀김',
        price: '4000'
      },
      {
        id: 3,
        name: '콜라',
        price: '2000'
      },
      {
        id: 4,
        name: '사이다',
        price: '2000'
      },
      {
        id: 5,
        name: '환타',
        price: '2000'
      }
    ]
    ,
    menu: []
  }
  handleCreate = (data) => {
    const { information } = this.state; //here
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleData = (data) => {
    this.handleCreate(data);
  }

  handleGetInfo = (data) => {
    const { number } = this.props.match.params
    const { menu } = this.state
    this.setState({
      menu: menu.concat({ id: this.id++, name: data.name, price: data.price, value: 1, table_number: number })
    })
  }

  render() {
    return (
      <div>
        <PosNavbar getData={this.handleData} />
        <div className="container_content">
          <ReceiptList data={this.state.menu}  />
          <PosList data={this.state.information} getInfo={this.handleGetInfo}  goData={this.state.menu}/>
        </div>
      </div>
    );
  }
}

export default Pos;