import React from 'react'
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

export default function FCNewIngredient() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <div>
      <h1>Create new ingredient</h1>
      <Grid container item xs={12} alignItems="center" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <Grid container item xs={12} justify="space-between" >
          <TextField id="inputName" label="Name" variant="outlined" />
          <TextField id="inputImage" label="Image (url)" variant="outlined" />
          <TextField id="inputCalories" label="Calories" variant="outlined" />
        </Grid>
      </Grid>

      <Grid container item xs={12} alignItems="center" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <Grid item xs={12} align="center" style={{ marginTop: "10px" }}>
          <Button variant="contained" color="primary" onClick={handleClick} >
            Create new ingredient
                    </Button>
        </Grid>
        <Grid item xs={12} align="center" style={{ marginTop: "10px" }}>
          < Button variant="contained" color="secondary">
            Clear form
                    </Button>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Ingredient add successfully!
              </Alert>
      </Snackbar>
    </div>
  )
}
