const TransactionReducer = ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":{
            return [action.payload , ...state]
        }
        // case "DELETE_TRANSACTION":{
        //     return [action.payload , ...state]
        // }
        default: //(parameter) state: Any
            return state;
    }
})

export default TransactionReducer;