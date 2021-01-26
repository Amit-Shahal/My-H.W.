using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.DTO
{
    public class ProductsDto
    {
        public string Name { get; set; }
        public string SerialNumber { get; set; }

        public Nullable<double> Price { get; set; }
        public Nullable<int> Inventory { get; set; }
    }
}