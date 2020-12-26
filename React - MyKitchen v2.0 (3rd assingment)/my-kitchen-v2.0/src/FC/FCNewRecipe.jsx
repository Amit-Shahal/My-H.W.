import { Checkbox } from '@material-ui/core';
import React from 'react'

export default function FCNewRecipe(props) {
    
    // let ingredientsCheckBoxs = props.ingredients.map(ing => (
        
    //    <p>{ing.name}</p> 
    // ));
    // let list = props.ingredients.map((rec,index) => (
    //     <Grid item xs={12} sm={6} md={4} key={index} align="center" >
    //       <FCRecipe 
    //       recipe={rec}
    //        sendData2Parent={getDataFromChild} 
    //        header={props.header}
    //         />
    //     </Grid>
    // ));
    return (
        <div>
            <h1>Create new Recipe</h1>
            {/* <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                style={{ paddingLeft: "10%", paddingRight: "10%" }}
            >
                
                <TextField onChange={handleChangeName} label="Name" variant="outlined" size="small" />
                <TextField onChange={handleChangeCalories} label="Cooking Method" variant="outlined" size="small" style={{ marginTop: "10px" }} />
                <TextField onChange={handleChangeCalories} label="Time" variant="outlined" size="small" style={{ marginTop: "10px" }} />
                <TextField onChange={handleChangeImageUrl} label="Image (url)" variant="outlined" size="small" style={{ marginTop: "10px" }} />
                {ingredientsCheckBoxs}
            </Grid> */}

        </div>
    )
}
