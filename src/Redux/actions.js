
//action creator ==> return a plain object
export const Incremet = ()=>{
    return {
       type: 'INCREMENT'
    }
}

export const Decrement = ()=>{
    return{
        type:'DECREMENT'
    }
}

export const Reset = ()=>{
    return{
        type: 'RESET'
    }
}

export const INC_with_value = (valeur)=>{
    return {
        type:'INCRMENT_WITH_VALUE',
        payload: valeur
    }
}