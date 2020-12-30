using ClassLibrary.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;


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
                tblRecipe[] Recipes = db.tblRecipes.ToArray();
                return Ok(Recipes);
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
                tblRecipe[] Recipes = db.tblRecipes.Where(x => x.RecipesID == id).ToArray();
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
                db.tblRecipes.Add(value);
                db.SaveChanges();
                //serch new Recipes index
                db = new KitchenDbContext();
                tblRecipe[] recipes = db.tblRecipes.Where(x => x.image == value.image).ToArray();
                return Created(new Uri(Request.RequestUri.AbsoluteUri + recipes[0].RecipesID), recipes[0]);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}