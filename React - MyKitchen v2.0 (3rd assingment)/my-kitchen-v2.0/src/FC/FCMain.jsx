import React , {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import FCNewIngredient from "./FCNewIngredient";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Main() {

  const [value, setValue] = useState(0);
  const [component, setComponent] = useState(<h2>Home</h2>);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setComponent(<h2>Home</h2>);
        break;
      case 1:
        setComponent(<FCNewIngredient/>);
        break;
      case 2:
        setComponent(<h2>creat recipe</h2>);
        break;
    }
  };

  return (
    // <Router>
      <div>
        
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >

            <Tab label="My Kitchen" />
            <Tab label="Create new ingredient" />
            <Tab label="Create new recipe" />

          </Tabs>
        </Paper>

        {component}


{/* יכולתי להשתמש בראוטר אבל זה יותר גניב :) */}
{/* 
        <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "red" }}>
          My Kitchen
          </NavLink>
        <NavLink to="/newIngredient">Create new ingredient </NavLink>
        <NavLink to="/newRecipe">Create new recipe </NavLink>

        <Switch>
          <Route path="/newIngredient">
            <FCNewIngredient />
          </Route>
          <Route path="/newRecipe">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    // </Router>
  );
}
