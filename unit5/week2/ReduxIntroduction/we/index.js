// 1.if you want to change something, dispatch(send) an action. 
// 2.action always go to a reducer. 
// 3.reducer returns a new store. 
// 4.store updates view.

// Action: object.  { type: "INC_COUNT", payload: 1 }
// Dispatch: function. take action, give it to the reducer. 
// Reducer: function.takes current state(store) and action. returns new store. 
// view: DOM, console, terminal.

class Store{
    constructor(reducer, initState) {
        this.reducer = reducer;       //fn
        this.state = initState;       //{count:0}
    }
    getState() {
        return this.state;
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}

const reducer = (store, action) => {
    // console.log(state,action);
    if (action.type === 'INC_COUNT') {
        return {
            count: store.count + action.payload
        }
    }
    return {}
}
const init = {count:0};
const store = new Store(reducer, init);
console.log(store.getState());
store.dispatch({ type: 'INC_COUNT', payload: 1 });
console.log(store.getState());

// 1.action Types
// 2.action creators. 
// 3.reducer
// 4.store