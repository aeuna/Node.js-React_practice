import React, { Component } from 'react'
import Receipt from './Receipt';
import './ReceiptList.css'

let ch = 0
let total
export default class ReceiptList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<Receipt key={info.id} info={info} />)
        );
        if(ch===1) {
            total =0
            for(var i=0; i < list.length; i++){
                console.log(data[i].price)
                total += parseInt(data[i].price)
            }
        }
        ch=1
        return (
            <div className="receipt">
                <div className="receipt_content">
                    <table className="table">
                        <th>메뉴</th>
                        <th>수량</th>
                        <th>가격</th>
                        {list}
                    </table>
                </div>
                <div className="price_sum">
                    <div className="price">Total</div>
                    <div className="price">{total}</div>
                </div>
            </div>
        );
    }
}
