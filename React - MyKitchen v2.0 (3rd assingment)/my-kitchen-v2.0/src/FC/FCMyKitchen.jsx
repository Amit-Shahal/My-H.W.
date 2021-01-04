import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
    root: {
        width:250,
    },
    media: {
        minHeight: 200,
    },
    card: {
        width: 250,
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FCMyKitchen() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [ingredientsInRecipe, setIngredientsInRecipe] = useState();
    const classes = useStyles();
    useEffect(() => {
        const url = 'http://localhost:57403/api/recipes';
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
        }).then(res => {
            return res.json()
        }).then(
            (result) => {
                setRecipes(result);
                setLoading(false);
            },
            (error) => {
                console.log("err post=", error);
            });
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const showIngredients = (ingredients) => {
        setOpen(true);
        let IngredientsCard = ingredients.map((ing, index) => (
            <Grid item xs={12} sm={6}  key={index}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={ing.image}
                        title={ing.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {ing.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Calories: {ing.calories}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ));
        setIngredientsInRecipe(IngredientsCard);
    }

    let list = recipes.map((r, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={r.image}
                    title={r.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {r.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        num of ingredients: {r.ingredients.length}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => showIngredients(r.ingredients)}
                        size="small" color="primary">
                        Show Ingredients
                     </Button>



                </CardActions>
            </Card>
        </Grid>
    ));
    const styleBtnContainer = {
        paddingLeft: "1%", marginTop: "10px", paddingRight: "1%"
    };
    return (
        <div>
            <h1>Recipes</h1>
            <Grid container
                spacing={1}
                justify="flex-start"
                alignItems="center"
                style={styleBtnContainer} >
                {loading ?
                    <h3>Loading Recipes... please wait</h3>
                    :
                    list}
            </Grid>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Ingredients"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Grid container
                            spacing={1}
                            justify="flex-start"
                            alignItems="center">
                            {ingredientsInRecipe}
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
