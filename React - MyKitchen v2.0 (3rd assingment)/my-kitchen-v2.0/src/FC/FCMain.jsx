import React , {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import FCNewIngredient from "./FCNewIngredient";
import FCNewRecipe from "./FCNewRecipe";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Main() {

  const [value, setValue] = useState(0);
  const [component, setComponent] = useState(<h2>Home</h2>);
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [calories, setCalories] = React.useState("");

  const getDataFromChild = (name,imageUrl,calories) => {
    setName(name);
    setImageUrl(imageUrl);
    setCalories(calories);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setComponent(<h1>Home</h1>);
        break;
      case 1:
        setComponent(<FCNewIngredient sendData2Parent={getDataFromChild}/>);
        break;
      case 2:
        setComponent(<FCNewRecipe/>);
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
        {name}
        <br/>
        {imageUrl}
        <br/>
        {calories}


{/* יכולתי להשתמש בראוט אבל זה יותר גניב :) */}
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
