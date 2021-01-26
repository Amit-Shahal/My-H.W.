using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ClassLibrary.EF;
using WebApi.DTO;


namespace WebApi.Controllers
{
    public class PurchaseController : ApiController
    {
        // POST: api/Purchase
        public IHttpActionResult Post([FromBody] List<PurchaseDto> purchases)
        {
            CafeteriaDB db = new CafeteriaDB();
            try
            {

                foreach (PurchaseDto purchase in purchases)
                {
                    //זה מטפל בטבלת מוצר(מוריד מלאי)
                    Product product = db.Product.Where(p => p.SerialNumber == purchase.SerialNumber).SingleOrDefault();
                    if (product.Inventory < purchase.Amount)
                    {
                        return Content(HttpStatusCode.BadRequest, $"{product.Name} amount that was purchased higher then inventory ");
                    }
                    else
                    {
                        product.Inventory -= purchase.Amount;
                    }
                    //זה מטפל בטבלת קניות (מוסיף קניה)
                    db.Purchase.Add(new Purchase()
                    {
                        StudentId = purchase.StudentId,
                        Amount = purchase.Amount,
                        Date = DateTime.Now,
                        SerialNumber = purchase.SerialNumber,
                    });
                }
                db.SaveChanges();
                return Ok("purchesed succssefuly! 😎");
            }
            catch (DbUpdateConcurrencyException ex)
            {

                var ctx = ((IObjectContextAdapter)db).ObjectContext;
                foreach (var et in ex.Entries)
                {
                    //client win
                    //ctx.Refresh(System.Data.Entity.Core.Objects.RefreshMode.ClientWins, et.Entity);

                    //store win
                    ctx.Refresh(System.Data.Entity.Core.Objects.RefreshMode.StoreWins, et.Entity);
                }
                db.SaveChanges();
                //check if inventory is still availabell
                db = new CafeteriaDB();
                foreach (PurchaseDto purchase in purchases)
                {
                    Product product = db.Product.Where(p => p.SerialNumber == purchase.SerialNumber).SingleOrDefault();
                    if (product.Inventory < purchase.Amount)
                    {
                        return Content(HttpStatusCode.BadRequest, $"Will you were thinking some one acquired the inventory of {product.Name}");
                    }
                }
                return Post(purchases);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}