import React, { Component } from 'react';
import './css/index.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="navbar">
                <ul>
                    <li><a className={'active'} href="/"><i className="iconfont iconshouye"></i><span>首页</span></a></li>
                    <li><a href="/"><i className="iconfont iconfenlei"></i><span>分类</span></a></li>
                    <li><a href="/"><i className="iconfont iconxingqiu-"></i><span>星球</span></a></li>
                    <li><a href="/"><i className="iconfont iconweibiaoti--"></i><span>购物车</span></a></li>
                    <li><a href="/"><i className="iconfont iconyonghu"></i><span>我的</span></a></li>
                </ul>
            </div>
         );
    }
}
 
export default Index;