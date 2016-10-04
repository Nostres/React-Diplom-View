import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Test from 'Test';
import B1 from 'B1';

@connect(
    state => ({
        name: state.name
    }), dispatch => ({
        dispatch: dispatch
    })
)
export default class App extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render () {
        const { name, dispatch} = this.props;
        return <div>
            <Test name={name}/>
            <B1 dispatch={dispatch} name={name}/>
        </div>;
    }
}