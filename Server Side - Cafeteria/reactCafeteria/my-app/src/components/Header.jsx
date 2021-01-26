import React, { useEffect, useState }  from 'react'
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Header(props) {


    let history = useHistory();
    const [value, setValue] = useState(0);

    useEffect(() => {
        history.push("/");
    }, []);

    const handleChange =  (event, newValue) => {
        console.log(props.isLogedIn);
         setValue(newValue);
        if (props.isLogedIn !== true || props.isLogedIn === undefined) {
            setValue(0);
            alert("your not loged in!");
            return;
        }

        if(props.isLogedIn === true && props.isLogedIn !== undefined){
            switch (newValue) {
                case 0:
                    // use push history to push path router
                    history.push("/");
                    break;
                case 1:
                    history.push("/shop");
                    break;
                case 2:
                    history.push("/dashboard");
                    break;
            }
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
                    <Tab label="Log In" />
                    <Tab label="Shop" />
                    <Tab label="Check Out" />
                </Tabs>
            </Paper>
        </div>
    )
}
