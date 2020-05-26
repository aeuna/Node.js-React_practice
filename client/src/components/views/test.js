import React, { Component } from 'react'

export default class test extends Component {
    render() {
        let codes = "<b>Will This Work?</b>";
        let tag = "<tr><td>사이다</td><td>1</td><td>콜라</td></tr><tr><td>사이다</td><td>1</td><td>콜라</td></tr>"
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: codes }}>
                </div>
                <table dangerouslySetInnerHTML={{ __html: tag }}>
                    {/* <th>메뉴</th>
                    <th>수량</th>
                    <th></th> */}
                </table>
            </div>
        );
    }
}

