const redux=require('redux')  
const createStore= redux.createStore
const BUY_CASE = 'BUY_CAKE';
function buyCake(){
  return {
    type: BUY_CASE,
    info: 'First redux action'
  }
}
// reducer 
const initialState= {
  numOfCakes: 10
}
const reducer=(state= initialState, action)=>{
switch(action.type){
case BUY_CASE: return {...state, numOfCakes: state.numOfCakes-1};
default: return state;

}

}
const store = createStore(reducer);
console.log('Initial State', store.getState());
const unsubcribe= store.subscribe(()=>console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubcribe();