import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

export default function CheckOut(props) {

    const classes = useStyles();

    let list = props.cart.map((p, index) => (
        <Grid item align="center" xs={12} sm={6} md={4} key={index}>
            <Card className={classes.root}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {p.Name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Price: {p.Price} ₪
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Amount: {p.Amount}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ));

    const styleBtnContainer = {
        paddingLeft: "10%", marginTop: "10px", paddingRight: "10%"
    };

    const postCart = () => {
        if (props.cart.length === 0) {
            alert("Please add products to your cart in order to buy");
            return;
        }
        const url = 'http://proj.ruppin.ac.il/bgroup18/test2/ServerSide-Cafeteria/cafeteriaApi/api/purchase';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(props.cart),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
        }).then(res => {
            return res.json()
        }).then(
            (result) => {
                alert(result)
            },
            (error) => {
                console.log("err post=", error);
            });

    }


    return (
        <div>
            <h1>Check Out</h1>
            <Grid container
                style={styleBtnContainer}
            >
                <Grid item xs={12}>
                    <Button
                        onClick={postCart}
                        variant="contained" color="primary"
                        size="small" fullWidth={true}
                        style={{ height: "40px" }} >
                        Buy
                     </Button>

                </Grid>
            </Grid>
            <Grid container
                spacing={1}
                justify="center"
                style={styleBtnContainer} >
                {props.cart.length === 0 ?
                    <h3>Please add products first</h3>
                    :
                    list}
            </Grid>
        </div>
    )
}
