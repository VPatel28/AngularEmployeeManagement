using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreMVCEmployeeManagement.DAL;
using AngularCoreMVCEmployeeManagement.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AngularCoreMVCEmployeeManagement.Controllers
{
    [Route("api/[controller]/[action]")]

    public class EmployeeController : Controller
    {
        private readonly EmployeeContext _context;
        public EmployeeController(EmployeeContext employeeContext)
        {
            _context = employeeContext;
        }
        public IActionResult GetEmployees()
        {
            try
            {
                var employees = _context.employees.ToList();
                return Ok(employees);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


       

    }
}