using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreMVCEmployeeManagement.Model
{
    public class Registration_Details : IEmployee
    {
        [ForeignKey("AspNetUsers")]
        public int ID { get; set; }
        [Display(Name = "Name")]
        public string EmpName { get; set; }
        [Display(Name = "Address")]
        public string Address { get; set; }
        [Display(Name = "Contact No")]
        public string PhoneNo { get; set; }
        [Display(Name = "Birthdate")]
        public DateTime BirthDate { get; set; }
     
        public string Role { get; set; }
        public string Password { get; set; }
        [Display(Name = "Email Address")]
        public string Email { get; set; }
    }
}
