import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
    {amount: 600, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"}
  ]

export const TransactionContext = createContext(initialTransactions);

//initialize the reducer with initial state and dispatch

//render children, all components will be child (react syntax) 
export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    //it is used for add  
    function addTransaction(transObj){
        dispatch({     //we are giving two things action.type and action.payload
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount, 
                desc: transObj.desc
            },
        })
    }
    //children render
    return(//here we have object and provider
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction//name: value addTransaction: addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )

}