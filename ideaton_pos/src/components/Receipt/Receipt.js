import React, { Component } from 'react';
export class Receipt extends Component {
  render() {
    const { name, price, id, value } = this.props.info;
    console.log('여기여기여기');
    console.log(name);
    console.log(price);

    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default Receipt;
