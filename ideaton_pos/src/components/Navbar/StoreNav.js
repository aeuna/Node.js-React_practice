import React, { Component } from 'react'
import './StoreNav.css'

export default class StoreNav extends Component {
    render() {
        return (
            <div className="sideMenu">
            <div className="logo__container">
                <h1 className="logo">Folkvalley</h1>
            </div>
            <div className="user__info">
                <div className="user__profile">
                </div>
                <div className="user__name">
                    <span>minwoo</span>
                </div>
                <div className="user__email">
                    <span>test@ddd.com</span>
                </div>
            </div>
            <div className="menu__container">
                <div className="--menu"><span>메인화면</span></div>
                <hr className="menuSep" />
                <div className="--menu"><span>메뉴 수정</span></div>
                <hr className="menuSep" />
                <div className="--menu"><span>테이블 수정</span></div>
                <hr className="menuSep" />
                <div className="--menu"><span>결제 정보</span></div>
                <hr className="menuSep" />
                <div className="--menu"><span>개인정보 수정</span></div>
            </div>
        </div>
        )
    }
}
