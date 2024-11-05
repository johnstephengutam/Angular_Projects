import { Routes } from '@angular/router';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import {ExpenseEntryListComponent} from './expense-entry-list/expense-entry-list.component';


export const routes: Routes = [
    {path: 'expenses/detail/:id', component: ExpenseEntryComponent},
    {path: 'expenses', component: ExpenseEntryListComponent},
    {path: '',redirectTo: 'expenses', pathMatch: 'full'}
];
