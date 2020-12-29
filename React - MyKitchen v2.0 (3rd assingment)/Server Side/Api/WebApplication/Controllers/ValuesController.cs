using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClassLibrary.EF;

namespace WebApplication.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IHttpActionResult Get()
        {
            try
            {
                KitchenDbContext db = new KitchenDbContext();
                tblIngredient[] ingredients = db.tblIngredients.ToArray();
                return Ok(ingredients);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
            
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            KitchenDbContext db = new KitchenDbContext();
            tblIngredient[] ingredient = db.tblIngredients.Where(x => x.IngredientsID == id).ToArray();
            return Ok(ingredient);
        }

        // POST api/values
        public void Post([FromBody] tblIngredient value)
        {
            KitchenDbContext db = new KitchenDbContext();
            db.tblIngredients.Add(value);
            db.SaveChanges();
            //return Created();  
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
