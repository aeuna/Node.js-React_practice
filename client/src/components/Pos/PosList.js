import React, { Component } from 'react'
import PosForm from './PosForm'
import './PosList.css'

export class PosList extends Component {
  static defaultProps = {
    data: []
  }
  handleClickEvent = (data) => {
    this.props.getInfo(data)
    // console.log("PosList.js");
    // console.log(data);
  }
  render() {
    const { data } = this.props;
    // console.log("what is this?")
    // console.log(data)
    const list = data.map(
      info => (<PosForm onGetInfo={this.handleClickEvent} key={info.id} info={info} />)
    );

    return (
      <div className="big">
        <div className="list_info">
          {list}
        </div>
        <div className="btn">
          <button class="button">현금</button>
          <button class="button">카드</button>
        </div>
      </div>
    );
  }
}

export default PosList