import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import FCNewIngredient from "./FCNewIngredient";
import FCNewRecipe from "./FCNewRecipe";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FCMyKitchen from "./FCMyKitchen";

export default function FCMain() {

  const history = useHistory();
  const [value, setValue] = useState(2);



  useEffect(() => {
    history.push("/newRecipe");
  }, []);



  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:

        // use push history to push path router
        history.push("/");
        break;
      case 1:
        history.push("/newIngredient");
        break;
      case 2:
        history.push("/newRecipe");
        break;
    }
  };

  return (
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
          <Tab label="new ingredient" />
          <Tab label="new recipe" />
        </Tabs>
      </Paper>


      {/* <Switch>
        <Route path="/" exact ><FCMyKitchen /></Route>
        <Route path="/newIngredient" exact><FCNewIngredient /></Route>
        <Route path="/newRecipe" exact ><FCNewRecipe /></Route>
      </Switch> */}

    </div>
  );
}

