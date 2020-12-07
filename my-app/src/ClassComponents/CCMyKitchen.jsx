import React, { Component } from 'react'
import FCRecipes from '../FunctionalComponents/FCRecipes';

export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes : [
                {
                    image: 'https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg',
                    name: 'Pad Thai',
                    caption:'stir-fry dish, mix all ingredients together'
                },
                {
                    image: 'https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg',
                    name: 'Chop Suey',
                    caption:'5 minute stir fry,add each vegetable in the order in which they cook.'
                },
                {
                    image: 'https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg',
                    name: 'Pho',
                    caption:'slow-cooked soup'
                }
            ],
            recipesDone : [],
        };
      }
   
      removeFromRecipes = (recipeToRemove) => {
        let recipesFiltered = this.state.recipes.filter((r) => r.image !== recipeToRemove.image)
        let recipesDoneNew = this.state.recipesDone;
        recipesDoneNew.push(recipeToRemove);

            this.setState({ 
                recipesDone: recipesDoneNew,
                recipes: recipesFiltered
            });
      }
      removeFromRecipesDone = (recipeToRemoveFromDone) => {
        let recipesDoneFilterd = this.state.recipesDone.filter((r) => r.image !== recipeToRemoveFromDone.image)
        let recipesNew = this.state.recipes;
        recipesNew.push(recipeToRemoveFromDone);

          this.setState({ 
              recipesDone: recipesDoneFilterd,
              recipes: recipesNew
          });
    }

    render() {
        return (
            <div>
                <FCRecipes recipes={this.state.recipes} sendData2Parent={this.removeFromRecipes} header='made'/>
                <FCRecipes recipes={this.state.recipesDone} sendData2Parent={this.removeFromRecipesDone} header='done'/>
            </div>
        )
    }
}
