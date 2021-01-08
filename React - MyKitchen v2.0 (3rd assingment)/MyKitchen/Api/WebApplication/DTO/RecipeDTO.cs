using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.DTO
{
    public class RecipeDTO
    {
        public int recipeID;
        public string name;
        public string cookingMethod;
        public int cookingTime;
        public string image;
        public List<IngredientDTO> ingredients;
    }
}