import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './PosNavbar.css'
import MyModal from "../modal/mymodal";
import ModalPortal from '../modal/ModalPortal'

export default class PosNavbar extends Component {
    state = {
        modal: false
    };
    handleOpenModal = () => {
        this.setState({
            modal: true
        });
    };
    handleCloseModal = () => {
        this.setState({
            modal: false
        });
    };

    handleData = (data) => {
        this.props.getData(data);
    }

    render() {
        return (
            <div className="container">
                <nav className="topMenu">
                    <ul className="mainmenu">
                        <li className="menuLink"><Link to="pos">주문</Link></li>
                        <li className="menuLink"><Link to="#">메뉴관리</Link>
                            <ul className="submenu">
                                <li onClick={this.handleOpenModal}>메뉴추가</li>
                                {this.state.modal && (
                                    <ModalPortal>
                                        <MyModal onClose={this.handleCloseModal} getData={this.handleData} />
                                    </ModalPortal>
                                )}
                                <li><Link to="#">메뉴수정</Link></li>
                            </ul>
                        </li>
                        <li className="menuLink"><Link to="#">판매기록</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
