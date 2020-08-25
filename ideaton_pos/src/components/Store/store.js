import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $script from 'scriptjs';
import './store.scss';
import './initial.scss';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tmptable: 1,
      tmpmenu: '떡볶이',
      tmpcount: 0,
      tmpprice: 0,
      tmpstr: '',
      order: [],
      /* 임시 데이터 */
      place_data: [
        {
          number: '2',
          bill: '32,400',
          menu: '떡볶이 2, 순대 1, 튀김 1',
        },
        {
          number: '4',
          bill: '4,000',
          menu: '어묵 2, 튀김 1',
        },
      ],
      price: {
        떡볶이: 3000,
        순대: 3500,
        튀김: 3000,
        어묵: 2000,
      },
      test: '',
    };
  }

  handleMenuAdd = (e) => {
    e.preventDefault();

    const result = document.querySelector('.result');
    const menu = this.state.tmpmenu;
    const count = this.state.tmpcount;
    const menuspan = document.createElement('span');
    const countspan = document.createElement('span');
    menuspan.innerText = menu;
    countspan.innerText = count;

    const resultdiv = document.createElement('div');
    resultdiv.appendChild(menuspan);
    resultdiv.appendChild(countspan);

    result.appendChild(resultdiv);
    this.state.order.push({
      menu: menu,
      count: count,
    });

    const totalPrice = document.querySelector('.resultTotal');
    let oprice = 0;
    for (let i = 0; i < this.state.order.length; ++i) {
      oprice +=
        this.state.price[this.state.order[i]['menu']] *
        Number(this.state.order[i]['count']);
    }
    this.state.tmpprice = oprice;
    if (this.state.tmpstr.length > 0) {
      this.state.tmpstr = `${this.state.tmpstr}, ${menu} ${count}`;
    } else {
      this.state.tmpstr = `${menu} ${count}`;
    }

    totalPrice.innerText = `총 금액: ${oprice}`;
  };

  handleMenuChange = (e) => {
    this.state.tmpmenu = e.target.value;
  };

  handleCountChange = (e) => {
    this.state.tmpcount = e.target.value;
  };

  handleTableChange = (e) => {
    this.state.tmptable = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.state.place_data.push({
      number: this.state.tmptable,
      bill: this.state.tmpprice,
      menu: this.state.tmpstr,
    });

    const tables = document.querySelectorAll('.hall--table');
    let activeTable = [];
    let nowTable = [];
    tables.forEach(function (data) {
      activeTable.push(data.innerText);
    });

    document.getElementById('myModal').style.display = 'none';
    const container = document.createElement('div');
    const tableOrder = document.createElement('div');

    container.classList.add('recent__place');
    tableOrder.classList.add('order__table');

    const number = document.createElement('span');
    number.classList.add('place-name');
    const menu = document.createElement('span');
    menu.classList.add('place-menu');
    const bill = document.createElement('span');
    bill.classList.add('place-bill');
    const tnumber = document.createElement('span');
    tnumber.classList.add('place-name');
    const tmenu = document.createElement('span');
    tmenu.classList.add('place-menu');
    const tbill = document.createElement('span');
    tbill.classList.add('place-bill');

    number.innerText = `테이블 번호 : ${this.state.tmptable}`;
    menu.innerText = `메뉴 : ${this.state.tmpstr}`;
    bill.innerText = `대금 : ${this.state.tmpprice}`;
    tnumber.innerText = `테이블 번호 : ${this.state.tmptable}`;
    tmenu.innerText = `메뉴 : ${this.state.tmpprice}`;
    tbill.innerText = `대금 : ${this.state.tmpstr}`;

    container.appendChild(number);
    container.appendChild(menu);
    container.appendChild(bill);

    tableOrder.appendChild(tnumber);
    tableOrder.appendChild(tmenu);
    tableOrder.appendChild(tbill);

    document.querySelector('.recent__container').appendChild(container);

    for (let i = 0; i < activeTable.length; ++i) {
      if (
        activeTable[i].length === 10 &&
        this.state.tmptable == activeTable[i].substr(-1)
      ) {
        tables[i].innerText = '';
        tables[i].appendChild(tableOrder);
        nowTable.push(activeTable[i]);
        tables[i].classList.add('--in');
      }
    }
  };

  componentDidMount() {
    // const { order } = this.props.location.state
    // console.log("--------------------------")
    // console.log(order)
    // console.log("------------------------")

    let modal = document.getElementById('myModal');
    let btn = document.querySelector('.order__add');
    let span = document.getElementsByClassName('close')[0];
    btn.onclick = function () {
      modal.style.display = 'block';
    };
    span.onclick = function () {
      modal.style.display = 'none';
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

    const tables = document.querySelectorAll('.hall--table');
    let activeTable = [];
    let nowTable = [];
    tables.forEach(function (data) {
      activeTable.push(data.innerText);
    });

    this.state.place_data.forEach(function (data) {
      const container = document.createElement('div');
      const tableOrder = document.createElement('div');

      container.classList.add('recent__place');
      tableOrder.classList.add('order__table');

      const number = document.createElement('span');
      number.classList.add('place-name');
      const menu = document.createElement('span');
      menu.classList.add('place-menu');
      const bill = document.createElement('span');
      bill.classList.add('place-bill');
      const tnumber = document.createElement('span');
      tnumber.classList.add('place-name');
      const tmenu = document.createElement('span');
      tmenu.classList.add('place-menu');
      const tbill = document.createElement('span');
      tbill.classList.add('place-bill');

      number.innerText = `테이블 번호 : ${data['number']}`;
      menu.innerText = `메뉴 : ${data['menu']}`;
      bill.innerText = `대금 : ${data['bill']}`;
      tnumber.innerText = `테이블 번호 : ${data['number']}`;
      tmenu.innerText = `메뉴 : ${data['menu']}`;
      tbill.innerText = `대금 : ${data['bill']}`;

      container.appendChild(number);
      container.appendChild(menu);
      container.appendChild(bill);

      tableOrder.appendChild(tnumber);
      tableOrder.appendChild(tmenu);
      tableOrder.appendChild(tbill);

      document.querySelector('.recent__container').appendChild(container);
      for (let i = 0; i < activeTable.length; ++i) {
        if (String(data['number']) === activeTable[i]) {
          tables[i].innerText = '';
          tables[i].appendChild(tableOrder);
          nowTable.push(activeTable[i]);
        }
      }
    });
    let selectTable = document.querySelector('.selectTable');
    const orderTable = activeTable.filter((item) => {
      for (let i = 0; i < nowTable.length; ++i)
        if (item == nowTable[i]) return false;
      return true;
    });
    for (let i = 0; i < orderTable.length; ++i) {
      let inter = document.createElement('option');
      inter.innerText = orderTable[i].substr(-1);
      selectTable.appendChild(inter);
    }
  }

  render() {
    const { params } = this.props.match;
    const style = {
      width: '100%',
    };
    const width_style = {
      width: '86%',
      float: 'right',
    };
    return (
      <div className='user-wrap' style={style}>
        <div className='sideMenu'>
          <div className='logo__container'>
            <h1 className='logo'>Folkvalley</h1>
          </div>
          <div className='user__info'>
            <div className='user__profile'></div>
            <div className='user__name'>
              <span>folkvalley</span>
            </div>
            <div className='user__email'>
              <span>{params.token}</span>
            </div>
          </div>
          <div className='menu__container'>
            <div className='--menu'>
              <span>메인화면</span>
            </div>
            <hr className='menuSep' />
            <div className='--menu'>
              <span>메뉴 수정</span>
            </div>
            <hr className='menuSep' />
            <div className='--menu'>
              <span>테이블 수정</span>
            </div>
            <hr className='menuSep' />
            <div className='--menu'>
              <span>결제 정보</span>
            </div>
            <hr className='menuSep' />
            <div className='--menu'>
              <span>개인정보 수정</span>
            </div>
          </div>
        </div>
        <div className='user__main' style={width_style}>
          <div id='myModal' className='modal'>
            <div className='modal-content'>
              <span className='close'>&times;</span>
              <form className='order__modal'>
                <div className='add'>
                  <p>테이블 선택</p>
                  <select
                    name='selectTable'
                    className='selectTable'
                    onChange={this.handleTableChange}
                  ></select>
                </div>
                <div className='add'>
                  <p>메뉴 선택</p>
                  <select
                    name='selectTable'
                    className='selectMenu'
                    onChange={this.handleMenuChange}
                  >
                    <option>떡볶이</option>
                    <option>순대</option>
                    <option>어묵</option>
                    <option>튀김</option>
                  </select>
                  <input
                    type='text'
                    className='selectCount'
                    placeholder='수량 입력'
                    onChange={this.handleCountChange}
                  ></input>
                  <button className='menu--add' onClick={this.handleMenuAdd}>
                    +
                  </button>
                </div>
                <div className='result'>
                  <h3>주문 결과</h3>
                </div>
                <hr />
                <div className='resultPrice'>
                  <h4 className='resultTotal'></h4>
                </div>
                <button onClick={this.handleSubmit}>주문 등록</button>
              </form>
            </div>
          </div>
          <div className='map__container'>
            <div className='title__container'>
              <h2 className='map--title'>홀</h2>
              <button className='order__add'>주문 추가하기</button>
            </div>
            <div className='hall--space'>
              <Link to='/pos'>
                <div className='hall--table'>테이블 번호 : 1</div>
              </Link>
              <Link to='/pos'>
                <div className='hall--table --in'>2</div>
              </Link>
              <Link to='/pos'>
                <div className='hall--table'>테이블 번호 : 3</div>
              </Link>
              <Link to='/pos'>
                <div className='hall--table --in'>4</div>
              </Link>
              <Link to='/pos'>
                <div className='hall--table'>테이블 번호 : 5</div>
              </Link>
              <Link to='/pos'>
                <div className='hall--table'>테이블 번호 : 6</div>
              </Link>
            </div>
          </div>
          <div className='recent__container'>
            <div className='recent--title'>
              <h2>현재 주문 상황</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
