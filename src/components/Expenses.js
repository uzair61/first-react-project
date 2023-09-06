
import ExpenseItems from "./ExpenseItems";


function Expenses(args) {


    return(

        <div>
            <ExpenseItems expense={args.items[0]}></ExpenseItems>
            <ExpenseItems expense={args.items[1]}></ExpenseItems>
            <ExpenseItems expense={args.items[2]}></ExpenseItems>
            <ExpenseItems expense={args.items[3]}></ExpenseItems>
            <ExpenseItems expense={args.items[4]}></ExpenseItems>
        </div>

    );
}

export default Expenses;