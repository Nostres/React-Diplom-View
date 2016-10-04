import React, { PropTypes, Component } from 'react';


export default class Test extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render () {
        return  <h1>Hello my name is {this.props.name}!!!!</h1>
    };
}

