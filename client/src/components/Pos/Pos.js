import React, { Component } from 'react';
// import PosForm from './PosForm';
import PosList from './PosList';
import PosNavbar from '../Navbar/PosNavbar';
import ReceiptList from '../Receipt/ReceiptList'
import './Pos.css'

class Pos extends Component {
    id = 2
    state = {
      information : [
        {
          id :0,
          name: '사이다',
          price: '2000'
        },
        {
          id :1,
          name: '콜라',
          price: '3000'
        },
        {
            id :2,
            name: '사이',
            price: '4000'
        },
        {
            id :3,
            name: '콜라',
            price: '2000'
        },
        {
            id :4,
            name: '사이다',
            price: '2000'
        },
        {
            id :5,
            name: '콜라',
            price: '2000'
        }
      ]
      ,
      menu : []
    }
  handleCreate = (data) => {
    const { information } = this.state; //here
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleData = (data) => {
    // console.log(data);
    this.handleCreate(data);
  }

  handleGetInfo = (data) => {
    const { menu } = this.state
    // console.log("pos.js");
    // console.log(data);
    // this.state.menu = data
    // this.setState(data)
      
    // console.log("state 확인");
    // console.log(this.state.menu) 
    // const { menu } = this.state.menu; here
    // this.setState({ here
    //     menu = data
    // })
    this.setState({
        menu : menu.concat({ id: this.id++ ,name: data.name, price: data.price, value: 1})
      })
    // console.log("최종확인")
    // console.log(this.state.menu.name)
    // console.log(this.state.menu.price)
    // console.log(this.state.menu.id)
  }
  
  render() {
    return (
        <div>
            <PosNavbar getData={this.handleData}/>
            <div className="container_content">
                {/* <Receipt godata={this.state.menu}/> */}
                <ReceiptList data={this.state.menu}/>
                <PosList data={this.state.information} getInfo={this.handleGetInfo}/>
            </div>
        </div>
    );
  }
}

export default Pos;