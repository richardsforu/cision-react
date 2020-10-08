import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increment() {
        let { counter } = this.state;
        this.setState({ counter: counter + 1 })
    }
    render() {
        let { counter } = this.state;
        return (
            <div>

                <div className="card">
                    <div className="card-header">Class Counter</div>
                    <div className="card-body text-center">
                        <button onClick={e=>{this.increment()}} className="btn btn-primary">Hit - {counter}</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default ClassCounter;