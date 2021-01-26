using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ClassLibrary.EF;
using WebApi.DTO;
using HttpGetAttribute = System.Web.Http.HttpGetAttribute;

namespace WebApi.Controllers
{
    public class StudentController : ApiController
    {
        
        public IHttpActionResult POST([FromBody] StudentLogInDto s)
        {
            try
            {
                return Ok(Student.CheckUserLogIn(s.Name, s.StudentId)); 
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
            
        }

        
    }
}