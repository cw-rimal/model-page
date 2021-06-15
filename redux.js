const redux = require('redux');

const reducer = (state = {}, action) => {
    if(action.type === "versionChange") {
        return {};
    } else if(action.type === "cityChange") {
        return {};
    }
    return state;
}

const store = redux.createStore(reducer);

const subscriber = () => {
    const newState =  store.getState();
}

store.subscribe(subscriber);

store.dispatch({ type: "versionChange" });
store.dispatch({ type: "cityChange" });