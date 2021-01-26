import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    media: {
        minHeight: 200,
    },
    card: {
        width: 250,
    },
});

export default function Shop(props) {
    const [loading, setLoading] = useState(true);
    const [products, SetProducts] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        const url = 'http://proj.ruppin.ac.il/bgroup18/test2/ServerSide-Cafeteria/cafeteriaApi/api/product/';
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
                SetProducts(result);
                setLoading(false);
            },
            (error) => {
                console.log("err post=", error);
            });
    }, []);

    let list = products.map((p, index) => (
        <Grid item align="center" xs={12} sm={6} md={4} key={index}>
            <Card className={classes.root}>

                <CardContent>
                    <Typography gutterBottom variant="h7" component="h1">
                        {p.Name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Price: {p.Price} ₪
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Inventory: {p.Inventory} 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => props.sendDataToParent(p)}
                        size="small" color="primary"
                        variant="contained" fullWidth={true}>
                            
                        Add to Cart
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
            <h1>shop</h1>
            <Grid container
                spacing={1}
                justify="center"
                style={styleBtnContainer} >
                {loading ?
                    <h3>Loading Products... please wait</h3>
                    :
                    list}
            </Grid>
        </div>
    )
}
