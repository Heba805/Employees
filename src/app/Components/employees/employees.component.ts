import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from 'src/app/listing.service';
import { Iemployee } from 'src/ViewModels/iemployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {
  employeeList: Iemployee[];
  filterdList: Iemployee[];
  defultDataFlag: boolean = true;




  constructor(private router: Router,
    private listing: ListingService) {
    this.employeeList = this.listing.employeeListing;


  }

  ngOnInit(): void {

  }

  onSearchChange(searchValue) {
    var searchVal = searchValue.toLowerCase();
    var searchnumaric = parseInt(searchValue);
    console.log(searchnumaric);


    this.filterdList = this.employeeList.filter((item) => {
      // console.log(parseFloat("agee"));

      return !item.username.toLowerCase().indexOf(searchVal) || !item.email.toLowerCase().indexOf(searchVal) || item.age == searchnumaric || item.salary == searchnumaric;
    })
    // console.log(this.filterdList)
    if (this.filterdList.length != 0) {
      this.defultDataFlag = false;
    }

  }

  deleteEmplyee(index: number) {
    this.employeeList[index].renderFlag = true;


    delete this.employeeList[index];




  }

}
