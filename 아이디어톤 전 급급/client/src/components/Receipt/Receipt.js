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
