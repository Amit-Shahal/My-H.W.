using ClassLibrary.EF;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using WebApplication.DTO;


namespace WebApplication.Controllers
{
    public class RecipesController : ApiController
    {
        // GET api/Recipes
        public IHttpActionResult Get()
        {
            try
            {
                KitchenDbContext db = new KitchenDbContext();
                List < RecipeDTO > recipes = db.tblRecipes.Select(r => new RecipeDTO() {
                    recipeID = r.RecipesID,
                    name = r.name,
                    cookingMethod = r.cookingMethod,
                    cookingTime = r.time ?? 0,
                    image = r.image,
                    ingredients = r.tblIngredients.Select(i => new IngredientDTO()
                    {
                        ingredientsID = i.IngredientsID,
                        name = i.name,
                        image = i.image,
                        calories = i.calories ?? 0,
                    }).ToList()
                }).ToList();
                return Ok(recipes);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }

        }

        // GET api/Recipes/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                KitchenDbContext db = new KitchenDbContext();
                List<RecipeDTO> Recipes = db.tblRecipes.Where(x => x.RecipesID == id).Select(r => new RecipeDTO()
                {
                    recipeID = r.RecipesID,
                    name = r.name,
                    cookingMethod = r.cookingMethod,
                    cookingTime = r.time ?? 0,
                    image = r.image,
                    ingredients = r.tblIngredients.Select(i => new IngredientDTO()
                    {
                        ingredientsID = i.IngredientsID,
                        name = i.name,
                        image = i.image,
                        calories = i.calories ?? 0,
                    }).ToList()
                }).ToList();
                return Ok(Recipes);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // POST api/Recipes
        public IHttpActionResult Post([FromBody] tblRecipe value)
        {

            try
            {
                KitchenDbContext db = new KitchenDbContext();
                tblRecipe v = new tblRecipe();
                v.name = value.name;
                v.image = value.image;
                v.time = value.time;
                v.cookingMethod = value.cookingMethod;
                foreach (tblIngredient i in value.tblIngredients)
                {
                    v.tblIngredients.Add(db.tblIngredients.Where(x => x.IngredientsID == i.IngredientsID).FirstOrDefault());
                }
               

                db.tblRecipes.Add(v);
                db.SaveChanges();
                //serch new Recipes index
                db = new KitchenDbContext();
                RecipeDTO recipe = db.tblRecipes.Where(x => x.image == value.image).Select(r => new RecipeDTO()
                {
                    recipeID = r.RecipesID,
                    name = r.name,
                    cookingMethod = r.cookingMethod,
                    cookingTime = r.time ?? 0,
                    image = r.image,
                    ingredients = r.tblIngredients.Select(i => new IngredientDTO()
                    {
                        ingredientsID = i.IngredientsID,
                        name = i.name,
                        image = i.image,
                        calories = i.calories ?? 0,
                    }).ToList()
                }).FirstOrDefault();
                return Created(new Uri(Request.RequestUri.AbsoluteUri + recipe.recipeID), recipe);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}