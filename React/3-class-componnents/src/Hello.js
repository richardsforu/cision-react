import React, { Component } from 'react';
import Test from './Test';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello Component</h1>
                <hr />
                <h2>{this.props.p1}</h2>
            </div>
        );
    }
}

export default Hello;