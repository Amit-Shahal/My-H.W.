import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 400,
    width: 275,
    // minWidth: 260, //styling choices
    // maxWidth:275
  },
  media: {
    height: 200,
     
  },
  cap: {
    height: 100,
    
  },
  
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
  
    <Card className={classes.root} variant={"outlined"} raised={true}>
        <CardMedia
          className={classes.media}
          image={props.recipe.image}
          title="Contemplative Reptile"
        />
        <CardContent
         className={classes.cap}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.recipe.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.recipe.caption}
          </Typography>
        </CardContent>
      <CardActions>
        <Button 
        size="large"
        color = {props.header==="made"?"primary":"secondary"}
        fullWidth={true} 
        variant="contained" 
        onClick={() => {props.sendData2Parent(props.recipe)}}
        >
          {props.header==="made"?"Prepare":"Eat"} Dish!
        </Button>
      </CardActions>
    </Card>
  );
}

