import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ToDoService {

    private toDos$ = new BehaviorSubject<string[]>([]);

    getToDos(){
        return this.toDos$.asObservable();
    }

    setToDos(todos: string[]){
        this.toDos$.next(todos);
    }

    deleteToDo(number: number){
        const toDos = this.toDos$.getValue();
        this.toDos$.next(toDos.filter((item, index) => index !== number));
    }

    addToDo(item: string){
        const toDos = this.toDos$.getValue();

        toDos.push(item);
        this.toDos$.next(toDos);
    }
}