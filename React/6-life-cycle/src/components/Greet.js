import React, { Component } from 'react';

class Greet extends Component {
    constructor(){
        super();
        console.log("GREET :: constructor");
    }

    componentDidMount(){
        console.log("GREET:: componentDidMount");
       this.interval= setInterval(() => {
         // this.forceUpdate();
        },1000)
      
      }

      componentWillUnmount(){
          console.log("GREET:: componentWillUnmount");
          clearInterval(this.interval)
      }

    shouldComponentUpdate(nextProps,nextState){ // default called by react
        console.log("GREET :: shouldComponentUpdate");
        return this.props.msg!==nextProps.msg;
        //return true;
    }

      componentDidUpdate(prevProps, prevState, snapshot){
        console.log("GREET::componentDidUpdate");
        console.log(this.props);
        console.log(prevProps);
      }


    render() {
        console.log("GREET :: render");
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