import React from 'react';

export default class Content extends React.Component {

    componentWillUnmount(){
        console.log('Component Will Mount')
    }

    componentDidMount(){
        console.log('Component Did Mount')
    }

    componentWillReceiveProps(newProps){
        console.log('Component Will reveive Props')
    }

    shouldComponentUpdate(newProps, newState){
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('Component Will Update')
    }

    componentDidUpdate(prevprops, prevState){
        console.log('Component Did Update')
    }

    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}