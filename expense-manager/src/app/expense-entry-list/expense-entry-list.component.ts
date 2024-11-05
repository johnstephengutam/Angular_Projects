import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { CommonModule } from '@angular/common';
import { DebugService } from '../debug.service';
import { ExpenseEntryService } from '../expense-entry.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-expense-entry-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './expense-entry-list.component.html',
  styleUrl: './expense-entry-list.component.css',
  viewProviders: [DebugService]
})
export class ExpenseEntryListComponent implements OnInit{
  title: string = "";
  expenseEntries: ExpenseEntry[] = [];

  ngOnInit(){
    this.debugService.info("Expense Entry List component initializaed");
    this.title = "Student List";
    //this.expenseEntries = this.getExpenseEntries();
    
    this.getExpenseItems();
  }

  constructor(private debugService: DebugService, private restService : ExpenseEntryService){
  }

  getExpenseItems(){
    this.restService.getExpenseEntries()
    .subscribe(data => this.expenseEntries = data);
  }

  /*
  getExpenseEntries() : ExpenseEntry[] {
    let mockExpenseEntries : ExpenseEntry[] = [
      {
        id: 1,
        firstName: "Vachana",
        lastName: "Stephen",
        streetAddress: "Ramona dr",
        city: "Anytown",
        state: "VA",
        zip: "22015",
        telephoneNumber: "571-224-7371",
        email: "vachana.stephen@gmail.com",
        dateOfSurvey: "2024-07-21",
        likedMost: "campus",
        interestSource: "Internet",
        recommendationLikelihood: "Very Likely"
  
      },
      {
        id: 3,
        firstName: "Vachana",
        lastName: "Stephen",
        streetAddress: "Ramona dr",
        city: "Anytown",
        state: "VA",
        zip: "22015",
        telephoneNumber: "571-224-7371",
        email: "vachana.stephen@gmail.com",
        dateOfSurvey: "2024-07-21",
        likedMost: "campus",
        interestSource: "Internet",
        recommendationLikelihood: "Very Likely"
  
      },
      {
        id: 4,
        firstName: "Vachana",
        lastName: "Stephen",
        streetAddress: "Ramona dr",
        city: "Anytown",
        state: "VA",
        zip: "22015",
        telephoneNumber: "571-224-7371",
        email: "vachana.stephen@gmail.com",
        dateOfSurvey: "2024-07-21",
        likedMost: "campus",
        interestSource: "Internet",
        recommendationLikelihood: "Very Likely"
  
      },
      {
        id: 5,
        firstName: "Vachana",
        lastName: "Stephen",
        streetAddress: "Ramona dr",
        city: "Anytown",
        state: "VA",
        zip: "22015",
        telephoneNumber: "571-224-7371",
        email: "vachana.stephen@gmail.com",
        dateOfSurvey: "2024-07-21",
        likedMost: "campus",
        interestSource: "Internet",
        recommendationLikelihood: "Very Likely"
  
      },
      {
        id: 6,
        firstName: "Vachana",
        lastName: "Stephen",
        streetAddress: "Ramona dr",
        city: "Anytown",
        state: "VA",
        zip: "22015",
        telephoneNumber: "571-224-7371",
        email: "vachana.stephen@gmail.com",
        dateOfSurvey: "2024-07-21",
        likedMost: "campus",
        interestSource: "Internet",
        recommendationLikelihood: "Very Likely"
  
      },
      {
        id: 7,
        firstName: "Vachana",
        lastName: "Stephen",
        streetAddress: "Ramona dr",
        city: "Anytown",
        state: "VA",
        zip: "22015",
        telephoneNumber: "571-224-7371",
        email: "vachana.stephen@gmail.com",
        dateOfSurvey: "2024-07-21",
        likedMost: "campus",
        interestSource: "Internet",
        recommendationLikelihood: "Very Likely"
  
      },
      {
        id: 8,
        firstName: "Vachana",
        lastName: "Stephen",
        streetAddress: "Ramona dr",
        city: "Anytown",
        state: "VA",
        zip: "22015",
        telephoneNumber: "571-224-7371",
        email: "vachana.stephen@gmail.com",
        dateOfSurvey: "2024-07-21",
        likedMost: "campus",
        interestSource: "Internet",
        recommendationLikelihood: "Very Likely"
  
      }
  ];

    
    return mockExpenseEntries;
  }*/

}
