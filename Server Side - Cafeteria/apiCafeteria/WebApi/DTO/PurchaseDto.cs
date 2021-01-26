using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.DTO
{
    public class PurchaseDto
    {
        public Nullable<int> StudentId { get; set; }
        public string SerialNumber { get; set; }
        public Nullable<int> Amount { get; set; }
    }
}