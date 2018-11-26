using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreMVCEmployeeManagement.DAL;
using AngularCoreMVCEmployeeManagement.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularCoreMVCEmployeeManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    public class CommonController : Controller
    {
        private readonly EmployeeContext _context;
        public CommonController(EmployeeContext employeeContext)
        {
            _context = employeeContext;
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserRole([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var registration_ = await _context.registration_Details.FindAsync(id);
            if (registration_ == null)
            {
                return NotFound();
            }
            return Ok(registration_);
        }


        [HttpPost(Name = "RegisterUser")]
        public async Task<dynamic> RegisterUser([FromBody] dynamic registration)
        {
            try
            {
                Registration_Details registration_Details = JsonConvert.DeserializeObject<Registration_Details>(JsonConvert.SerializeObject(registration));
                await _context.registration_Details.AddAsync(registration_Details);
                int i = await _context.SaveChangesAsync();

                return Ok(registration);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost(Name = "ValidateLogin")]
        public dynamic ValidateLogin([FromBody] dynamic registration)
        {
            try
            {
                Registration_Details registration_Detail = JsonConvert.DeserializeObject<Registration_Details>(JsonConvert.SerializeObject(registration));
                registration_Detail = _context.registration_Details.Where(e => e.Email == registration_Detail.Email && e.Password == registration_Detail.Password).FirstOrDefault();
                if (registration_Detail != null)
                {
                    if (registration_Detail.Email != null)
                        return Ok(registration_Detail);
                    else
                        return NotFound();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
