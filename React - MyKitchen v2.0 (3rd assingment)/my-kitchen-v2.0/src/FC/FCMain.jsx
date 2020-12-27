import React, { useState , useEffect} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import FCNewIngredient from "./FCNewIngredient";
import FCNewRecipe from "./FCNewRecipe";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FCMyKitchen from "./FCMyKitchen";

export default function FCMain() {

  const history = useHistory();
  const [value, setValue] = useState(0);

  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [calories, setCalories] = React.useState("");

  useEffect(() => {
   history.push("/");
  }, []);

  const getDataFromChild = (name, imageUrl, calories) => {
    setName(name);
    setImageUrl(imageUrl);
    setCalories(calories);
  }

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
          <Tab label="My Kitchen"/>
          <Tab label="Create new ingredient" />
          <Tab label="Create new recipe" />
        </Tabs>
      </Paper>
       
       
      <Switch>
        <Route path="/" exact ><FCMyKitchen /></Route>
        <Route path="/newIngredient" exact><FCNewIngredient sendData2Parent={getDataFromChild} /></Route>
        <Route path="/newRecipe"exact ><FCNewRecipe /></Route>
      </Switch>

      {name}{imageUrl}{calories}
    </div>
  );
}

