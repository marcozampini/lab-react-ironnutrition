import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foodsList, setFoodsList] = useState(foods);

  return (
    <div className="App">
      {foodsList.map((foodItem) => (
        <FoodBox food={foodItem} key={foodItem.name} />
      ))}
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
