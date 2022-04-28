import Expences from './Components/Expences';
import './App.css';

function App() {
  let expences=[
    {
      id:'e1',
      title:'school fee',
      amount:'250',
      date:new Date(2022,4,25)
    },
    {
      id:'e2',
      title:'shoes',
      amount:'236',
      date:new Date(2022,4,24)
    },
    {
      id:'e3',
      title:'copy',
      amount:'250',
      date:new Date(2022,4,29)
    },
    {
      id:'e4',
      title:'uniform',
      amount:'250',
      date:new Date(2022,4,30)
    }

  ];
 
  return (
    <div>
      <h2> Expence Tracker</h2>
      <Expences item={expences} />
   
    </div>
  );
}

export default App;
