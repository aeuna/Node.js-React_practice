
import React, { Component } from 'react'
import './mymodal.css';
import MenuAdd from '../MenuAdd'


class mymodal extends Component {

    handleCreate = (data) => {
        // console.log(data);
        this.props.getData(data);
    }

    render() {
        return (
            <div className="MyModal">
                <div className="content">
                    <MenuAdd onCreate={this.handleCreate} />
                    <button onClick={this.props.onClose}>닫기</button>
                </div>
            </div>
        )
    }
}

export default mymodal





