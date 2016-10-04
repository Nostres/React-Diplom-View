import React, { PropTypes, Component } from 'react';
import { toogle } from 'reducer';

export default class B1 extends Component {
    static propTypes = {
        name: PropTypes.string,
        dispatch: PropTypes.dispatch
    };

    constructor(props) {
        super(props);

        this.switchName = this.switchName.bind(this);
    }

    switchName(){
        const { name, dispatch } = this.props;
        dispatch(toogle(name));
    }

    render() {
        return <button onClick={this.switchName}>Change</button>;
    }

}