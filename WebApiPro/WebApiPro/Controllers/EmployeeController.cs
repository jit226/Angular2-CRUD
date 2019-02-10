using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiPro.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using(AngularSampleDbEntities db=new AngularSampleDbEntities())
            {
                return db.Employees.ToList();
            }
        }
        public Employee Get(string code)
        {
            using (AngularSampleDbEntities db = new AngularSampleDbEntities())
            {
                return db.Employees.FirstOrDefault(emp=>emp.code==code);
            }
        }
    }
}
