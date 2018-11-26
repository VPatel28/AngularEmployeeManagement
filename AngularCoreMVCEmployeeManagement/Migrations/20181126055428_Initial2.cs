using Microsoft.EntityFrameworkCore.Migrations;

namespace AngularCoreMVCEmployeeManagement.Migrations
{
    public partial class Initial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employees_departments_departmentID",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "DeptID",
                table: "employees");

            migrationBuilder.AlterColumn<int>(
                name: "departmentID",
                table: "employees",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_employees_departments_departmentID",
                table: "employees",
                column: "departmentID",
                principalTable: "departments",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employees_departments_departmentID",
                table: "employees");

            migrationBuilder.AlterColumn<int>(
                name: "departmentID",
                table: "employees",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "DeptID",
                table: "employees",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_employees_departments_departmentID",
                table: "employees",
                column: "departmentID",
                principalTable: "departments",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
