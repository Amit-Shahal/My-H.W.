using ClassLibrary.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication.DTO;

namespace WebApplication.Controllers
{
    public class IngredientsController : ApiController
    {
        // GET api/Ingredients
        public IHttpActionResult Get()
        {
            try
            {
                KitchenDbContext db = new KitchenDbContext();
                List<IngredientDTO> ingredients = db.tblIngredients.Select(i => new IngredientDTO()
                {
                    ingredientsID = i.IngredientsID,
                    name = i.name,
                    image = i.image,
                    calories = i.calories ?? 0,
                    recipes = i.tblRecipes.Select(r => new RecipesOfIngredientDTO()
                    {
                        recipeID = r.RecipesID,
                        name =r.name,
                        cookingMethod =r.cookingMethod,
                        cookingTime =r.time ?? 0,
                        image =r.image,
                    }).ToList()
                }).ToList();

                return Ok(ingredients);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }

        }

        // GET api/Ingredients/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                KitchenDbContext db = new KitchenDbContext();
                List<IngredientDTO> ingredient = db.tblIngredients.Where(x => x.IngredientsID == id).Select(i => new IngredientDTO()
                {
                    ingredientsID = i.IngredientsID,
                    name = i.name,
                    image = i.image,
                    calories = i.calories ?? 0,
                    recipes = i.tblRecipes.Select(r => new RecipesOfIngredientDTO()
                    {
                        recipeID = r.RecipesID,
                        name = r.name,
                        cookingMethod = r.cookingMethod,
                        cookingTime = r.time ?? 0,
                        image = r.image,
                    }).ToList()
                }).ToList();

                

                return Ok(ingredient);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // POST api/Ingredients
        public IHttpActionResult Post([FromBody] tblIngredient value)
        {

            try
            {
                KitchenDbContext db = new KitchenDbContext();
                db.tblIngredients.Add(value);
                db.SaveChanges();
                //serch new ingredient index
                db = new KitchenDbContext();
                tblIngredient[] ingredient = db.tblIngredients.Where(x => x.image == value.image).ToArray();
                return Created(new Uri(Request.RequestUri.AbsoluteUri + ingredient[0].IngredientsID), ingredient[0]);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}