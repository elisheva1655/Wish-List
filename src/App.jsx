import { List } from './List';
import './App.css'

function App() {
  const wishList = 
      [{id: 1, value: "Car" },
      { id: 2, value: "Necklace" },
      { id: 3, value: "Earings" },
      { id: 4, value: "Bracelet" },
      { id: 5, value: "Tickets to EY" },
      { id: 6, value: "Watch" },
      ];

  return (
    
    <div>
      <h1>Wish List</h1>
      <List items={wishList}/>
    </div>  
       
  
  )
}

export default App
