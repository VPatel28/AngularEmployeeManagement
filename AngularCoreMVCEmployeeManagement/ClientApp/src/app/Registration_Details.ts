import { Injectable } from "@angular/core";

@Injectable()
export class Registration_Details {
  id: number;
  EmpName: string;
  Address: string;
  PhoneNo: string;
  Password: string;
  BirthDate: Date;
  role: string;
  Email: string;
}
