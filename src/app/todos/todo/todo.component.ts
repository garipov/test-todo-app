import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() name: string;
  @Input() index: number;

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  delete(){
    this.toDoService.deleteToDo(this.index);
  }

}
