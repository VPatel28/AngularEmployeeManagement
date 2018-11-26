using AngularCoreMVCEmployeeManagement.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using IHostingEnvironment = Microsoft.Extensions.Hosting.IHostingEnvironment;

namespace AngularCoreMVCEmployeeManagement.DAL
{
    public class EmployeeContext : IdentityDbContext<ApplicationUser>
    {
        IHostingEnvironment Environment;

        public EmployeeContext(DbContextOptions<EmployeeContext> options,IHostingEnvironment ihostingEnviornment) : base(options)
        {
            Environment = ihostingEnviornment;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
           .SetBasePath(Environment.ContentRootPath)
           .AddJsonFile("appsettings.json")
           .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<Registration_Details> registration_Details { get; set; }
        public DbSet<Employee> employees { get; set; }
        public DbSet<Department> departments { get; set; }
    }
}
