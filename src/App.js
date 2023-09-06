
import './App.css';
import Expenses from './components/Expenses';


function App() {
 
  const expenses = [
   {
    date : "2022-08-21",
    item : "Car Insurance",
    price : "200",
   },
   
   {
    date : "2021-08-29",
    item : "Groceries",
    price : "1500",
   },

   {
    date : "2023-08-21",
    item : "Fuel Exp",
    price : "1000",
   },

   {
    date : "2020-08-21",
    item : "Furniture",
    price : "600",
   },

   {
    date : "2019-08-21",
    item : "New Television",
    price : "20000",
   }

  ];
  
 
 
  return (
    <div className="App">
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
