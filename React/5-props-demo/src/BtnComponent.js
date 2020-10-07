import React, { Component } from 'react';

class BtnComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            emp:{ name:'Praveen'}
        };
    }

    getBtnCount() {
        let { count } = this.state;
        let {getTotalCount,btnLable}=this.props
        this.setState({ count: count + 1 });
        getTotalCount(btnLable);


    }

    render() {
        let { btnLable } = this.props;
        let {count} = this.state;
        let clsName;
        clsName=btnLable>0?'btn btn-primary':'btn btn-danger'

        return (
            <span>
                <span className="badge badge-warning">{count}</span>
                <button onClick={e=>this.getBtnCount()} className={clsName} >{btnLable} </button>
            </span>
        );
    }
}

export default BtnComponent;