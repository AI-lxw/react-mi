import React, { Component } from 'react';
import './css/index.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="activities">
                <a href="/"><img src={require('./img/1.jpg')} alt=""/></a>
            </div>
         );
    }
}
 
export default Index;