import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from "react-router-dom";
import FCNewIngredient from "./FCNewIngredient";
import FCNewRecipe from "./FCNewRecipe";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FCMyKitchen from "./FCMyKitchen";

export default function FCMain(props) {

  let history = useHistory();
  const [value, setValue] = useState(0);
  const [component, setComponent] = useState(<h2>Home</h2>);
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [calories, setCalories] = React.useState("");

  const getDataFromChild = (name, imageUrl, calories) => {
    setName(name);
    setImageUrl(imageUrl);
    setCalories(calories);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        // setComponent(<FCMyKitchen />);
        // use push history some how to push path router
        // history.push("/"); 
        break;
      case 1:
        setComponent(<FCNewIngredient sendData2Parent={getDataFromChild} />);
        break;
      case 2:
        setComponent(<FCNewRecipe />);
        break;
    }
  };

  return (
    <Router>
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
        <br />
        {imageUrl}
        <br />
        {calories}



        {/* 
        <Link to="/" >
          
        </Link>
        <Link to="/newIngredient">Create new ingredient </Link>
        <Link to="/newRecipe">Create new recipe </Link> */}

        <Switch>
          <Route path="/newIngredient" component={FCNewIngredient} ></Route>
          <Route path="/newRecipe" component={FCNewRecipe}></Route>
          <Route path="/" component={FCMyKitchen}></Route>
        </Switch>
      </div>
    </Router>
  );
}

