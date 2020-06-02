import React, { Component } from 'react'
import PosNavbar from '../Navbar/PosNavbar';
import './salerecord.css'

export default class salerecord extends Component {
    render() {
        return (
            <div className="check">
                <PosNavbar getData={this.handleData} />
                <div className="receipt1">
                    <div className="receipt_content1">
                        <table className="table1">
                            <th>메뉴</th>
                            <th>가격</th>
                            <th>날짜</th>
                            <tr>
                                <td>떡볶이2,순대1,튀김1</td>
                                <td>32400</td>
                                <td>2020.05.27</td>
                            </tr>
                            <tr>
                                <td>어묵1,순대1,튀김1</td>
                                <td>12000</td>
                                <td>2020.05.27</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
