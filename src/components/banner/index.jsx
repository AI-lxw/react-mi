import React, { Component } from 'react';
import './css/index.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul className="banner">
                <li><a href="/"><img src={require('./img/1.jpg')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/2.jpg')} alt=""/></a></li>
                <li><a href="/"><img src={require('./img/3.jpg')} alt=""/></a></li>
            </ul>
         );
    }
}
 
export default Index;