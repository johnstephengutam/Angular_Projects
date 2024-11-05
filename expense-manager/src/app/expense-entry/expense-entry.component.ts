import { Component, OnInit } from '@angular/core';
import {ExpenseEntry} from '../expense-entry'
import { ExpenseEntryService } from '../expense-entry.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-expense-entry',
  standalone: true,
  imports: [],
  templateUrl: './expense-entry.component.html',
  styleUrl: './expense-entry.component.css'
})
export class ExpenseEntryComponent implements OnInit{
  title: string = "";
  expenseEntry$: Observable<ExpenseEntry>= of({
    id: 0,
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    telephoneNumber: '',
    email: '',
    dateOfSurvey: '',
    likedMost: '',
    interestSource: '',
    recommendationLikelihood: ''
  }); 
  expenseEntry: ExpenseEntry = {} as ExpenseEntry;
  selectedId: number = 0;
  constructor(private restService: ExpenseEntryService, 
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = "Expense Entry";
    this.expenseEntry$ =  this.route.paramMap.pipe(
      switchMap(
        params => {
          this.selectedId = Number(params.get('id'));
          return this.restService.getExpenseEntry(this.selectedId);
        }
      )
    );

    this.expenseEntry$.subscribe((data) => this.expenseEntry = data);

    /*this.expenseEntry = {
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

    };*/
  }

  goToList(){
    this.router.navigate(['/expenses'])
  }

}
