import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function FCNewIngredient(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openCF, setCFOpen] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [calories, setCalories] = useState("");

  const handleCreateNewIngredient = () => {
    const url = 'http://proj.ruppin.ac.il/bgroup18/test2/MyKitchenPublish/api/Ingredients';
    let newIngredient =
    {
      "tblRecipes": [],
      "name": name,
      "image": imageUrl,
      "calories": calories,
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newIngredient),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    });
    setOpen(true);       //turn on Snackbar alert
    //clear value of textfileds
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setName("");
    setImageUrl("");
    setCalories("");

  };

  const handleClearForm = () => {

    //clear value of textfileds
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setName("");
    setImageUrl("");
    setCalories("");
    //turns on Snackbar alert

    setCFOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setCFOpen(false);
  };

  const ChangeName = (e) => {
    setName(e.target.value);

  };
  const ChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const ChangeCalories = (e) => {
    setCalories(e.target.value);
  };
  const styleBtnContainer = {
    paddingLeft: "10%", marginTop: "10px", paddingRight: "10%"
  };

  const styleTextField = {
    marginTop: "10px"
  };
  const styleTextFieldContainer = {
    paddingLeft: "10%", paddingRight: "10%"
  };

  return (
    <div >
      <h1>Create new ingredient</h1>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        style={styleTextFieldContainer}
      >
        <TextField onChange={ChangeName}
          label="Name" variant="outlined" size="small" style={styleTextField} />

        <TextField onChange={ChangeImageUrl}
          label="Image (url)" variant="outlined" size="small" style={styleTextField} />

        <TextField onChange={ChangeCalories}
          label="Calories" variant="outlined" size="small" style={styleTextField}
          type="number" />

      </Grid>

      <Grid container
        style={styleBtnContainer}
      >
        <Grid item xs={12} sm={6}>
          <Button
            onClick={handleCreateNewIngredient}
            variant="contained" color="primary"
            size="small" fullWidth={true} >
            Create new ingredient
         </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          < Button
            onClick={handleClearForm}
            variant="contained" color="secondary"
            size="small" fullWidth={true}>
            Clear form
        </Button>
        </Grid>
      </Grid>


      <Snackbar open={open} autoHideDuration={1200} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Ingredient added successfully!
              </Alert>
      </Snackbar>
      <Snackbar open={openCF} autoHideDuration={1200} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Form cleared
              </Alert>
      </Snackbar>
    </div>
  )
}
