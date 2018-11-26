using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreMVCEmployeeManagement.Model
{
    public class Employee : IEmployee
    {
        
        public int ID { get; set; }
        [Display(Name ="Name")]
        public string EmpName { get; set; }
        [Display(Name = "Address")]
        public string Address { get; set; }
        [Display(Name = "Phone No")]
        public string PhoneNo { get; set; }
        [Display(Name = "Birth Date")]
        public DateTime BirthDate { get; set; }
        [Display(Name = "Qualification")]
        public string Education { get; set; }
        [ForeignKey("Department")]
        public int departmentID { get; set; }
        public  Department department { get; set; }
        [Display(Name = "Email ID")]
        public string Email { get; set; }
    }

    public interface IEmployee
    {
        int ID { get; set; }
        string Email { get; set; }
        string EmpName { get; set; }
        string Address { get; set; }
        string PhoneNo { get; set; }
        DateTime BirthDate { get; set; }
    }
}
