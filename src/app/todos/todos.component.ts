import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public name = '';
  public status = false;
  public toDos$: Observable<string[]>;
  
  constructor(private toDoService: ToDoService) {   }

  ngOnInit(): void {
    this.toDos$ = this.toDoService.getToDos();
  }

  add(){
    if(this.name){
      this.toDoService.addToDo(this.name)
    }
  }

  clearAll(){
    this.toDoService.setToDos([]);
  }


  trackByFn(index: number){
      return index;
  }

}