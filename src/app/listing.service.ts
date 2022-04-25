import { Injectable } from '@angular/core';
import { Iemployee } from 'src/ViewModels/iemployee';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  employeeListing: Iemployee[];


  constructor() {
    this.employeeListing = [{ Id: 1, username: 'Heba', age: 25, salary: 7500, email: "heba@heba.com", renderFlag: false },
    { Id: 2, username: 'Ali', age: 30, salary: 100, email: "Ali@Ali.com", renderFlag: false },
    { Id: 3, username: 'Salma', age: 35, salary: 60000, email: "Salma@Salma.com", renderFlag: false },
    { Id: 4, username: 'Reem', age: 40, salary: 8500, email: "Reem@Reem.com", renderFlag: false },
    { Id: 5, username: 'Hassan', age: 45, salary: 8000, email: "Hassan@Hassan.com", renderFlag: false }
    ]


  }
}
