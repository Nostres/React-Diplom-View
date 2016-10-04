const SWITCH_1 = 'SWITCH_1';
const SWITCH_2 = 'SWITCH_2';



const initialState = {
    name: null
};

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case SWITCH_1:
            return Object.assign({}, state, {name: 'Ivan'});
        case SWITCH_2:
            return Object.assign({}, state, {name: 'Dima'});
        default:
            return state
    }
}

export function toogle(name) {
    const num = ('Ivan' === name && name) ? 2:1 ;
    return {
        type: `SWITCH_${num}`
    }
}
