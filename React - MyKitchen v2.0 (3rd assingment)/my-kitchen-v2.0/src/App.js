import './App.css';
import { Route ,Switch } from 'react-router-dom';

import FCMain from './FC/FCMain.jsx';
import FCNewIngredient from "./FC/FCNewIngredient";
import FCNewRecipe from "./FC/FCNewRecipe";
import FCMyKitchen from "./FC/FCMyKitchen";

function App() {
  return (
    <div className="App">
      
      <FCMain />
      <Switch>
        <Route path="/" exact ><FCMyKitchen /></Route>
        <Route path="/newIngredient" exact><FCNewIngredient /></Route>
        <Route path="/newRecipe" exact ><FCNewRecipe /></Route>
      </Switch>
    </div>
  
  );
}

export default App;
