import React, { Component } from 'react'
import PosForm from './PosForm'
import './PosList.css'
import { Link } from "react-router-dom"

export class PosList extends Component {
  static defaultProps = {
    data: []
  }
  handleClickEvent = (data) => {
    this.props.getInfo(data)
  }
  render() {
    console.log("자식에게 잘도착했는가?")
    console.log(this.props.goData)

    const { data } = this.props;
    const list = data.map(
      info => (<PosForm onGetInfo={this.handleClickEvent} key={info.id} info={info} />)
    );
    return (
      <div className="big">
        <div className="list_info">
          {list}
        </div>
        <div className="btn">
          <Link to={{
            pathname: '/store',
            state: {
              order : this.props.goData
            }
          }}>
            <button class="button">현금</button></Link>
          <button class="button">카드</button>
        </div>
      </div>
    );
  }
}

export default PosList