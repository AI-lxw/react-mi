import React, { Component } from 'react';
import './css/index.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul className="catalogue">
                <li><a href="/"><img src={require('./img/1.png')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/2.gif')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/3.png')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/4.png')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/5.png')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/6.png')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/7.png')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/8.webp')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/9.webp')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/10.webp')} alt=""/></a></li>
            </ul>
         );
    }
}
 
export default Index;