import React, { Component } from 'react';
import './index.scss'
import Go from '../arrow/go'
import Navbar from '../navbar';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="my">
                <div className="login">
                    <div className="user">
                        <img src={require('./img/avatar.png')} alt=""/>
                    </div>
                    <div className="name">
                        <span className={'name'}>注册/登录</span>
                    </div>
                </div>
                <div className="order">
                    <span>我的订单</span>
                    <a href="/" className="myorder">全部订单<i className={'iconfont iconxiangyoujiantou'}></i></a>
                </div>
                <ul className="ordernav">
                    <li><a href="/" className="dfk"><img src={require('./img/nav_01.png')} alt=""/><span>待付款</span></a></li>
                    <li><a href="/" className="dsh"><img src={require('./img/nav_02.png')} alt=""/><span>待收货</span></a></li>
                    <li><a href="/" className="thx"><img src={require('./img/nav_03.png')} alt=""/><span>退换修</span></a></li>
                </ul>
                <ul className="items">
                    <li className={'first'}>
                        <a href="/">
                            <img src={require('./img/1.png')} alt=""/>
                            <div className="right">
                                <span>
                                    会员中心
                                </span>
                                <Go />
                            </div>
                        </a>
                    </li>
                    <li className={'second'}>
                        <a href="/">
                            <img src={require('./img/2.png')} alt=""/>
                            <div className="right">
                                <span>
                                    我的优惠
                                </span>
                                <Go />
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="items">
                    <li className={'first'}>
                        <a href="/">
                            <img src={require('./img/3.png')} alt=""/>
                            <div className="right">
                                <span>
                                    服务中心
                                </span>
                                <Go />
                            </div>
                        </a>
                    </li>
                    <li className={'second'}>
                        <a href="/">
                            <img src={require('./img/4.png')} alt=""/>
                            <div className="right">
                                <span>
                                    小米之家
                                </span>
                                <Go />
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="items">
                    <li className={'first'}>
                        <a href="/">
                            <img src={require('./img/5.png')} alt=""/>
                            <div className="right">
                                <span>
                                    我的F码
                                </span>
                                <Go />
                            </div>
                        </a>
                    </li>
                    <li className={'second'}>
                        <a href="/">
                            <img src={require('./img/6.png')} alt=""/>
                            <div className="right">
                                <span>
                                    我的优惠
                                </span>
                                <Go />
                            </div>
                        </a>
                    </li>
                </ul>
                <Navbar></Navbar>
            </div>
         );
    }
}
 
export default Index;