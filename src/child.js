import React, { useContext} from 'react';
import {TransactionContext} from './transContext'
import {useState} from 'react';

function Child() {

  // let transactions = [
  //   {amount: 500, desc: "Cash"},
  //   {amount: -40, desc: "Book"},
  //   {amount: -200, desc: "Camera"}
  // ]
  let {transactions, addTransaction} = useContext(TransactionContext);//here comes the transaction
  // it is used for input
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  //console.log(transactions)
  //it is handleAddition function which by default bring an event
   const handleAddition = (event) =>{
       event.preventDefault();
       //console.log(newDesc, newAmount);
       if(Number(newAmount) === 0){
          alert("Please enter correct value");
          return false;
        }
       addTransaction({ //this will recieve an object which contains amount and desc 
           amount:Number(newAmount),
           desc: newDesc              
       });
       setDesc('');
       setAmount(0);
  }

  const getIncome = () => {
    let income =0;//create a variable
    for (var i=0; i<transactions.length; i++){
      if (transactions[i].amount>0)//income will non negative number
        income+= transactions[i].amount
    }
    return income;
  }

  const getExpense = () =>{
    let expense = 0;
    for (var i=0; i < transactions.length;i++){
      if(transactions[i].amount<0)
        expense += transactions[i].amount
    }
    return expense;
  }
  return (
    <div className="container">
        <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance<br /> ${getIncome() + getExpense()}</h3>
    
        <div className="expense-container">
            <h3>INCOME<br /> ${getIncome()} </h3> 
            <h3>EXPENSE<br /> ${getExpense()} </h3>

        </div>
        
        <h3>History</h3>
        <hr />

        <ul className="transaction-list">
            {transactions.map((transObj, ind)=>{
            return(<li key={ind}>
              <span>{transObj.desc}</span>
            <span>${transObj.amount}</span>
          </li>)  
            } )}

        </ul>

        <h3>Add new transaction</h3>
        <hr />
        <form className="transaction-form" onSubmit={handleAddition}>
          
          <label>
            Enter Description <br />
              {/* onChange event will run when one button input */}
             <input type="text" value={newDesc} placeholder="Description" onChange={(ev)=>setDesc(ev.target.value)} required/> 
          </label>
          <br />
          <label>
            Enter Amount <br />
            <input type="number" value={newAmount} placeholder="Amount" onChange={(ev)=>setAmount(ev.target.value)} required/>
          </label>
          <br />
          
          <input type="submit" value="Add Transaction" />
        </form>
    </div>
  );
}

export default Child;
