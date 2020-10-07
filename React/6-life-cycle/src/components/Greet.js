import React, { Component } from 'react';

class Greet extends Component {
    render() {
        let { msg } = this.props
        return (
            <div>
                <div className="card">
                    <div className="card-header">Greet Component</div>
                    <div className="card-body text-center">
                        <h2>{msg}</h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default Greet;