import React, {useState} from 'react'; 

import './ExpenseItems.css';


function ExpenseItems (props) {

   const [date, setDate] = useState(props.expense.date);
   const [item, setItem] = useState(props.expense.item);
   const [price, setPrice] = useState(props.expense.price);
   

   const onClickHandler = () => {
      setItem("Clicked!!!!")
   }
   
     
   return (
      <div className="expense-item"> 
        <div>{date}</div>
        <div className="expense-item__description">
            <h2>{item}</h2>
        </div>
        <div className="expense-item__price">{price}</div>
        <div>
         <button type="button" onClick={onClickHandler}>Update</button>
        </div>
      </div>
   );

}   

export default ExpenseItems;  