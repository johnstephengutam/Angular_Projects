import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task{
  id: number;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Task Manager';
  taskList: Task[] = [];
  taskname = '';
  yes: boolean = false;
  nextId: number = 1;

  addTask(str: Task){
    if(str != null){
    this.taskList.push(str);
    console.log(str)

    this.yes = true;
    }
  }

  createTask(taskname: string ): Task| null{
    if(taskname == ''){
      console.error('Task name cannot be empty.');
      return null;
    }else
    return {
      id: this.nextId++,
      name: taskname,
      selected: false
    };
  }

  deleteTask(){
    this.taskList = this.taskList.filter(task => !task.selected);
  }
}
