import React, { Component } from 'react'
import StoreNav from '../Navbar/StoreNav'
import './store_statistic.css'

export default class store_statistic extends Component {
    render() {
        return (
            <div>
                <StoreNav />
                <div className="order__Receipt">
                    <div className="title_container">
                        <h2 className="title">매장 분석</h2>
                    </div>
                    <div className="ordering">
                        <div className="downcontainer">
                            <div className="downcontainer_wrap">
                                <div className="title_downcontainer">
                                    <span>매출 분석</span>
                                </div>
                                <div class="wrap">
                                    <table class="wrap_table first">
                                        <th>결제 금액</th>
                                        <th>결제 건수</th>
                                        <th>평균 결제</th>
                                        <tr>
                                            <td>10000000원</td>
                                            <td>20건</td>
                                            <td>100293939원</td>
                                        </tr>
                                    </table>
                                    <table class="wrap_table second">
                                        <th>환불 금액</th>
                                        <th>환불 건수</th>
                                        <th>평균 환불 금액</th>
                                        <tr>
                                            <td>10000000원</td>
                                            <td>20건</td>
                                            <td>100293939원</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="downcontainer_wrap second">
                                <div className="title_downcontainer">
                                    <span>메뉴 분석</span>
                                </div>
                                <div className="rank">
                                    <div className="rank_static">
                                        <div className="first_name">
                                            <span>1.</span>
                                            <span>떡볶이</span>
                                        </div>
                                        <div className="first_description">
                                            총 주문 ___개 중, __개 주문
                                        </div>    
                                    </div>
                                    <div className="rank_static">
                                        <div className="rank_sub">
                                            <span>2.</span>
                                            <span>순대</span> &nbsp;&nbsp;
                                            <span className="val_small">__건</span>
                                        </div>
                                        <div className="rank_sub">
                                            <span>3.</span>
                                            <span>튀김</span> &nbsp;&nbsp;
                                            <span className="val_small">__건</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="downcontainer_wrap">
                                <div className="title_downcontainer">
                                    <span>판매 기록</span>
                                </div>
                                <div className="wrap">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
