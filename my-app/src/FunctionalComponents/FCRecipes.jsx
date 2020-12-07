import React from 'react'
import FCRecipe from './FCRecipe';
import Grid from '@material-ui/core/Grid';



export default function FCRecipes(props) {

    const getDataFromChild = (recipeToRemove) => {
        props.sendData2Parent(recipeToRemove);
    }

     let list = props.recipes.map((rec,index) => (
        <Grid item xs={12} sm={6} md={4} key={index} align="center" >
          <FCRecipe 
          recipe={rec}
           sendData2Parent={getDataFromChild} 
           header={props.header}
            />
        </Grid>
    ));

    return (
        <div>
                <h1>Recipes</h1>
                <h3>recipes {props.header}: {props.recipes.length}</h3> <br/>
                <Grid container justify="flex-start" alignItems="center" spacing={8} style = {{paddingLeft:"10%",paddingRight:"10%"}}>   
                    {list} 
                </Grid> 
               
            </div>
    )
}
