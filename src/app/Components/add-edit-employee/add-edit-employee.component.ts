import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from 'src/app/listing.service';
import { Iemployee } from 'src/ViewModels/iemployee';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.sass']
})
export class AddEditEmployeeComponent implements OnInit {
  employeeList: Iemployee[];
  employeeId: number = 0;
  renderingList: Iemployee;
  nameInput: string = '';
  ageInput: number = 0;
  salaryInput: number = 0;
  emailInput: string = '';
  currentIndex: number = 0;
  divRendringFlag: boolean = false;
  empObject: Iemployee = {
    Id: 0,
    username: "",
    age: 0,
    salary: 0,
    email: "",
    renderFlag: false
  }
  empforEdit: Iemployee = {
    Id: 0,
    username: "",
    age: 0,
    salary: 0,
    email: "",
    renderFlag: false

  }



  constructor(private activatedRout: ActivatedRoute,
    private listing: ListingService) {
    this.employeeList = this.listing.employeeListing;


    // this.nameInput = 'heba';
    // this.ageInput = 20;
    // this.salaryInput = 2000;
    // this.emailInput = "email";
  }

  ngOnInit(): void {
    let empIDParam: string | null = this.activatedRout.snapshot.paramMap.get('empID');
    this.employeeId = (empIDParam) ? parseInt(empIDParam) : 0;

    // console.log(empIDParam);


    // if (this.employeeId) {
    //   let result = this.employeeList.find((item) => {
    //     return item.Id == this.employeeId;

    //   })
    //   this.nameInput = result.username;
    //   this.ageInput = result.age;
    //   this.salaryInput = result.salary;
    //   this.emailInput = result.email;

    // }
    // console.log(this.employeeList)


  }

  EditEmployee() {
    console.log("inside edit");
    console.log(this.employeeList);
    // this.currentIndex = this.employeeList.findIndex((obj) => {
    //   obj.Id == this.employeeId;
    //   console.log(this.currentIndex);
    //   this.employeeList[this.currentIndex].username = this.nameInput;
    //   this.employeeList[this.currentIndex].age = this.ageInput;
    //   this.employeeList[this.currentIndex].salary = this.salaryInput;
    //   this.employeeList[this.currentIndex].email = this.emailInput;
    // })

    let result = this.employeeList.find((item) => {
      return item.Id == this.employeeId;

    })
    result.username == this.nameInput;
    result.age = this.ageInput;
    result.salary = this.salaryInput;
    result.email = this.emailInput;
    // console.log(result)


    console.log(this.employeeList);
  }

  addEmployee() {

    console.log("add mood");
    this.empObject.Id = this.employeeList[this.employeeList.length - 1].Id + 1;
    this.empObject.username = this.nameInput;
    this.empObject.age = this.ageInput;
    this.empObject.salary = this.salaryInput;
    this.empObject.email = this.emailInput;
    console.log(this.empObject);
    this.employeeList.push(this.empObject);
    // console.log(this.employeeList)
  }


  checkMood() {
    this.divRendringFlag = true;
    let textDiv = document.getElementById("msg")
    if (!this.employeeId) {
      this.addEmployee();
      textDiv.innerHTML = "Employee Added successfully"


    } else if (this.employeeId) {
      this.EditEmployee();
      textDiv.innerHTML = "Employee Edited successfully";

    }

  }


}
