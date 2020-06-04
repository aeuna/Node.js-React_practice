import React, { Component } from 'react'
export class  Receipt extends Component {
    // static defaultProps = {
    //     info: {
    //         name: '',
    //         price: '',
    //     }
    // }
    render() {
        const {
            name, price, id, value
        } = this.props.info;
        console.log("여기여기여기")
        console.log(name)
        console.log(price)
        // total += parseInt(price)
        // console.log(total)
        // console.log("얼마인가")
        // console.log(total-ex)
        // if(ex == 0)  ex= parseInt(price) 
        // else ex=total-ex

        return (
            <tr>
                <td>{name}</td>
                <td>{value}</td>
                <td>{price}</td>
            </tr>
        )
    }
}

export default  Receipt
