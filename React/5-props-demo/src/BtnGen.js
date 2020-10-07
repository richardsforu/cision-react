import React, { Component } from 'react';
import BtnComponent from './BtnComponent';

class BtnGen extends Component {

    constructor() {
        super();
        this.state = {
            totalCount: 0
        }
    }

    getTotalCount(e) {
        let { totalCount } = this.state;
        this.setState({ totalCount: totalCount + e })
        // console.log(e);
        // console.log("BtnGen:: getTotalCount");
    }

    getButtons() {
        let person = { id: 10, name: 'Praveen', age: 10 }
        let { btnLables } = this.props;
        return btnLables.map((btnLable, idx) => {
            return (
                <span key={idx} >
                    <BtnComponent getTotalCount={e => { this.getTotalCount(e) }} perObj={person} btnLable={btnLable} />
                </span>)
        })
    }


    render() {
        let { btnLbl } = this.props;
        let { totalCount } = this.state;
        return (
            <span>

                {this.getButtons()}
                <hr />
                <h1>Total Sum: {totalCount} </h1>
            </span>
        );
    }
}

export default BtnGen;