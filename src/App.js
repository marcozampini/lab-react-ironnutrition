import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foodsList, setFoodsList] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      <div className="food-list">
        {foodsList.map((foodItem) => (
          <FoodBox food={foodItem} key={foodItem.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
