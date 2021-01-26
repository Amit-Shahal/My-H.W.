import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

export default function LogIn(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [studentId, setStudentId] = useState("");

    const handlebtnLogIn = async () => {
        const url = 'http://proj.ruppin.ac.il/bgroup18/test2/ServerSide-Cafeteria/cafeteriaApi/api/student/';
        let studentLogin =
        {
            "StudentId": studentId,
            "Name": name
        };
        let isLoged = false;
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(studentLogin),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                // 'Accept': 'application/json; charset=UTF-8',
            })
        }).then(res => {
            return res.json()
        }).then(
            (result) => {
                console.log("res= ",result);
                isLoged = result;
            },
            (error) => {
                console.log("err post=", error);
            });
            
        if (isLoged === true && isLoged !== undefined) {
            setOpen(true);       //turn on Snackbar alert
        }
        else{
            alert("problem loging in, please try again");
        }
        props.sendDataToParent(isLoged, studentId);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const ChangeName = (e) => {
        setName(e.target.value);

    };
    const ChangeStudentId = (e) => {
        setStudentId(e.target.value);
    };

    const styleTextFieldContainer = {
        paddingLeft: "10%", paddingRight: "10%"
    };

    const styleTextField = {
        marginTop: "10px"
    };
    const styleBtnContainer = {
        paddingLeft: "10%", marginTop: "10px", paddingRight: "10%"
    };


    return (
        <div>
            <h3>Please log in to commit a purchase:</h3>
            <h6>(try : Gadi , 255)</h6>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                style={styleTextFieldContainer}
            >
                <TextField onChange={ChangeName} required id="standard-required"
                    label="Name:" variant="outlined" size="small" style={styleTextField} />

                <TextField onChange={ChangeStudentId} type="number" id="standard-number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label="Student ID:" variant="outlined" size="small" style={styleTextField} />
            </Grid>

            <Grid container
                style={styleBtnContainer}
            >
                <Grid item xs={12}>
                    <Button
                        onClick={handlebtnLogIn}
                        variant="contained" color="primary"
                        size="small" fullWidth={true}
                        style={{ height: "40px" }} >
                        Log In
                     </Button>

                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={1200} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    LogIny successfully!
              </Alert>
            </Snackbar>
        </div>
    )
}













///funcs

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