import React, { Component } from 'react';
import './css/index.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="goods">
                <ul>
                    <li>
                        <a href="">
                            <img src={require('./img/1.jpg')} alt=""/>
                            <div className="name">小米10 Pro</div>
                            <div className="description">小米10 Pro豪华</div>
                            <div className="price">
                                <i className={'symbol'}>￥</i>1350
                            </div>
                            <div className="buttom">立即购买</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require('./img/2.jpg')} alt=""/>
                            <div className="name">小米10 Pro</div>
                            <div className="description">12小米10 Pro</div>
                            <div className="price">
                                <i className={'symbol'}>￥</i>1688
                            </div>
                            <div className="buttom">立即购买</div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={require('./img/3.jpg')} alt=""/>
                            <div className="name">小米10 Pro</div>
                            <div className="description">12小米10 Pro</div>
                            <div className="price">
                                <i className={'symbol'}>￥</i>1688
                            </div>
                            <div className="buttom">立即购买</div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={require('./img/4.jpg')} alt=""/>
                            <div className="name">小米10 Pro11</div>
                            <div className="description">12小米10 Pro</div>
                            <div className="price">
                                <i className={'symbol'}>￥</i>1688
                            </div>
                            <div className="buttom">立即购买</div>
                        </a>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default Index;