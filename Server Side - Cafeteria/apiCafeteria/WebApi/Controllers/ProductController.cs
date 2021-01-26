using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ClassLibrary.EF;
using WebApi.DTO;

namespace WebApi.Controllers
{
    public class ProductController : ApiController
    {

        public IHttpActionResult Get()
        {
            try
            {
                CafeteriaDB db = new CafeteriaDB();
                List<ProductsDto> products = db.Product.Select(p => new ProductsDto()
                {
                    Name = p.Name,
                    SerialNumber = p.SerialNumber,
                    Price = p.Price,
                    Inventory = p.Inventory
                }).ToList();
                return Ok(products);
            }
            catch (Exception ex)
            {

                return Content(HttpStatusCode.BadRequest, ex);
            }
          

           
        }


    }
}