import React, { Component } from 'react'
import './PosForm.css'

export class PosForm extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            price: '0000',
            id: 0
        }
    }
    handleClick = (e) => {
        this.props.onGetInfo(this.props.info)
        // console.log("PosForm.js");
        // console.log(this.props.info);
    }
    render() {
        const {
            name, price
        } = this.props.info;

        return (
            <div className ="form" onClick={this.handleClick}>
                <div><b>{name}</b></div>
                <div>{price}원</div>
            </div>
        )
    }
}

export default PosForm

