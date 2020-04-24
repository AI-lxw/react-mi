import React, { Component } from 'react';
import './index.scss'
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header className={'header_top'}>
                <div className="logo">
                    <img src={require('../../img/logo.png')} alt=""/>
                </div>
                <div className="search">
                    <i className={'iconfont iconsousuo'}></i>
                    <span>搜索商品名称</span>
                </div>
                    <div className="login ">
                    <i className={'iconfont iconyonghu'}></i>
                </div>
            </header>
         );
    }
}
 
export default Head;