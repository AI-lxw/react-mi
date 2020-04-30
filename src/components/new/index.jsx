import React, { Component } from 'react';
import './css/index.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="new">
                <div className="left"><a href="/"><img src={require('./img/1.jpg')} alt=""/></a></div>
                <div className="right">
                    <div className="r-top"><a href="/"><img src={require("./img/2.jpg")}alt=""/></a></div>
                    <div className="r-bottom"><a href="/"> <img src={require('./img/3.jpg')} alt=""/></a></div>
                </div>
            </div>
         );
    }
}
 
export default Index;