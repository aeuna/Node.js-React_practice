import React, { Component } from 'react'
import './order.css'
import StoreNav from '../Navbar/StoreNav'

export default class order extends Component {
    render() {
        return (
            <div>
                <StoreNav />
                <div className="order__Receipt">
                    <div className="title_container">
                        <h2 className="title">주문내역</h2>
                    </div>
                    <div className="ordering">
                        <div className="table_order">
                            <div className="menus">
                                <div className="menu_detail">
                                    <div className="table_menu number">
                                        <div className="price_order">
                                            <h1>테이블 1</h1>
                                        </div>

                                        <div className="price_order total">
                                            <button class="order_btn">접수받기</button>
                                        </div>
                                    </div>
                                    <div className="table_menu menu" ><span>떡볶이</span><span>4</span></div>
                                    <div className="table_menu menu"><span>순대</span><span>3</span></div>
                                </div>
                                <hr></hr>
                                <div className="table_menu menu">
                                    <div className="price_order">
                                        <span>가격</span>
                                    </div>
                                    <div className="price_order total">
                                        <span>2000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="table_menu menu">No.1</div>
                        </div>
                        <div className="table_order">
                            <div className="menus">
                                <div className="menu_detail">
                                    <div className="table_menu number">
                                        <div className="price_order">
                                            <h1>테이블 2</h1>
                                        </div>

                                        <div className="price_order total">
                                            <button class="order_btn">접수받기</button>
                                        </div>
                                    </div>
                                    <div className="table_menu menu" ></div>
                                    <div className="table_menu menu"></div>
                                </div>
                                <hr></hr>
                                <div className="table_menu menu">
                                    <div className="price_order">
                                        <span>가격</span>
                                    </div>
                                    <div className="price_order total">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="table_menu menu">No.2</div>
                        </div>
                        <div className="table_order">
                            <div className="menus">
                                <div className="menu_detail">
                                    <div className="table_menu number">
                                        <div className="price_order">
                                            <h1>테이블 3</h1>
                                        </div>

                                        <div className="price_order total">
                                            <button class="order_btn">접수받기</button>
                                        </div>
                                    </div>
                                    <div className="table_menu menu" ></div>
                                    <div className="table_menu menu"></div>
                                </div>
                                <hr></hr>
                                <div className="table_menu menu">
                                    <div className="price_order">
                                        <span>가격</span>
                                    </div>
                                    <div className="price_order total">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="table_menu menu">No.2</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
