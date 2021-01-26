import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import FCNewIngredient from "./FC/FCNewIngredient";
import FCNewRecipe from "./FC/FCNewRecipe";
import FCMyKitchen from "./FC/FCMyKitchen";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Route component={App} />
      <Switch>
        <Route path="/" exact ><FCMyKitchen /></Route>
        <Route path="/newIngredient" exact><FCNewIngredient /></Route>
        <Route path="/newRecipe" exact ><FCNewRecipe /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
