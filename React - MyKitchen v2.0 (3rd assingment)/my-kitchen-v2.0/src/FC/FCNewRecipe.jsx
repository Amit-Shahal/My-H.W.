import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Snackbar, Checkbox } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { wait } from '@testing-library/react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 475,
    },
    media: {
        minHeight: 200,
    },
});

const useStyless = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function FCNewRecipe(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsInNewRecipe, setIngredientsInNewRecipe] = useState([]);
    const [open, setOpen] = useState(false);
    const [openCF, setCFOpen] = useState(false);
    const [name, setName] = useState("");
    const [cookingMethod, setCookingMethod] = useState("");
    const [CookingTime, setCookingTime] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    useEffect(() => {
        const url = 'http://localhost:57403/api/Ingredients';
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
                setIngredients(result);
                setLoading(false);
            },
            (error) => {
                console.log("err post=", error);
            });

    }, []);

    const handleCreateNewRecipe = () => {

        //new recipe here
        const url = 'http://localhost:57403/api/recipes';
        console.log(ingredientsInNewRecipe);
        let newRecipe =
        {
            "name": name,
            "image": imageUrl,
            "cookingMethod": cookingMethod,
            "time": CookingTime,
            "tblIngredients": ingredientsInNewRecipe
        }
       
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
        });

        //turn on Snackbar alert
        setOpen(true);
    };

    const handleClearForm = () => {
        console.log(ingredientsInNewRecipe);
        //clear value of textfileds
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        setName("");
        setCookingMethod("");
        setCookingTime("");
        setImageUrl("");

        //turns on Snackbar alert
        setCFOpen(true);
    };

    const handleCheckbox = (ingredient, e) => {
        let itemChecked = ingredientsInNewRecipe;
        if (e.target.checked) {
            itemChecked.push({"ingredientsID":ingredient.ingredientsID} );
            setIngredientsInNewRecipe(itemChecked);
        }
        else {
            let x = ingredientsInNewRecipe.filter((i) => i.ingredientsID !== ingredient.ingredientsID);
            setIngredientsInNewRecipe(x);
        }
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

    const ChangeCookingMethod = (e) => {
        setCookingMethod(e.target.value);
    };
    const ChangeCookingTime = (e) => {
        setCookingTime(e.target.value);
    };


    const styleTextField = {
        marginTop: "10px"
    };
    const styleTextFieldContainer = {
        paddingLeft: "10%", paddingRight: "10%"
    };
    const styleBtnContainer = {
        paddingLeft: "10%", marginTop: "10px", paddingRight: "10%"
    };

    let list = ingredients.map((ing, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.root}>
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
                <CardActions>

                    <FormControlLabel


                        value={ing.ingredientsID}
                        onChange={(e) => handleCheckbox(ing, e)}
                        control={<Checkbox color="primary"

                            inputProps={{ 'aria-label': 'secondary checkbox' }} />}
                        label="add Ingredient:"
                        labelPlacement="start"
                    />


                </CardActions>
            </Card>
        </Grid>
    ));

    return (
        <div>
            <h1>Create new Recipe</h1>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                style={styleTextFieldContainer}
            >
                <TextField onChange={ChangeName}
                    label="Name" variant="outlined" size="small"
                    style={styleTextField} />

                <TextField onChange={ChangeCookingMethod}
                    label="Cooking Method" variant="outlined" size="small"
                    style={styleTextField} />
                <TextField onChange={ChangeCookingTime}
                    label="Cooking Time" variant="outlined" size="small"
                    style={styleTextField} type="number" />

                <TextField onChange={ChangeImageUrl}
                    label="Image (url)" variant="outlined" size="small"
                    style={styleTextField} />

            </Grid>

            <Grid container
                spacing={1}
                justify="flex-start"
                alignItems="center"
                style={styleBtnContainer} >
                {loading ?
                    <h3>Loading Ingredients... please wait</h3>
                    :
                    list}
            </Grid>

            <Grid container
                style={styleBtnContainer}
            >
                <Grid item xs={12} sm={6}>
                    <Button
                        onClick={handleCreateNewRecipe}
                        variant="contained" color="primary"
                        size="small" fullWidth={true} >
                        Create new recipe
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
                    Recipe added successfully!
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
