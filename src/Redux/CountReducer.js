import {INCREMENT} from './ActionTypes'
const initialState={
    count:0
}

const CountReducer = (state= initialState,action)=>{
    switch(action.type){
        case INCREMENT : return {...state, count: state.count + 1}
        case 'DECREMENT' : return {...state, count: state.count - 1}
        case 'RESET' : return {...state, count:0}
        case 'INCRMENT_WITH_VALUE': return {...state,count: state.count + action.payload}
        default : return state

    }
}

export default CountReducer