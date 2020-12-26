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
    //turn on Snackbar alert
    setOpen(true);

    //uplifte
    props.sendData2Parent(name,imageUrl,calories);
  };

  const handleClearForm = () => {
    
    //clear value of textfileds
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setName("");
    setImageUrl("");
    setCalories("");
    //turn on Snackbar alert
    setCFOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setCFOpen(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    
  };
  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleChangeCalories = (e) => {
    setCalories(e.target.value);
  };

  return (
    <div>
      <h1>Create new ingredient</h1>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <TextField onChange={handleChangeName} label="Name" variant="outlined" size="small" />
        <TextField onChange={handleChangeImageUrl}  label="Image (url)" variant="outlined" size="small" style={{  marginTop: "10px" }} />
        <TextField onChange={handleChangeCalories}  label="Calories" variant="outlined" size="small" style={{  marginTop: "10px" }}  />
      </Grid>

      <Grid container
        style={{ paddingLeft: "10%", marginTop: "10px", paddingRight: "10%" }}
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
          Ingredient add successfully!
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
