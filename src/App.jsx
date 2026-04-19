import { List } from './List';
import './App.css'

function App() {
  const wishList = 
      [{id: 1, value: "Car" },
      { id: 2, value: "Laptop" },
      { id: 3, value: "Earings" },
      { id: 4, value: "Bracelet" },
      ];

  return (
    
    <div>
      <h1>Wish List</h1>
      <List items={wishList}/>
    </div>  
       
  
  )
}

export default App
