import { Injectable } from '@angular/core';
import { TodoInterface } from '../Interface/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
 
  todoList : TodoInterface[] = [
    {
      id: 1,
      title: 'Complete task',
      description: 'Module',
      status: 'inprogress',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
      assignedEmployee: {
        id: 1,
        name: 'Sai kalpana',
        image: ''
      }
    },
    {
      id: 2,
      title: 'Watch Webseries',
      description: '2 episodes',
      status: 'completed',
      date: new Date('2023-08-04'),
      priority: 'Low',
      complete_percentage:80,
      assignedEmployee: {
        id: 1,
        name: 'BabuPrasath',
        image: ''
      }
    },
    {
      id: 3,
      title: 'Read a Book',
      description: 'Read an interesting novel.',
      status: 'NotStarted',
      date: new Date('2023-08-05'),
	  priority: 'Medium',
    complete_percentage:100,
    assignedEmployee: {
      id: 1,
      name: 'Sulaiman',
      image: ''
    }
    },
  ];


  
  lastId: number = this.todoList.length > 0 ? this.todoList[this.todoList.length - 1].id : 0;

  getAll() {
    return this.todoList;
  }
  generateNewId(): number {
    this.lastId++;
    return this.lastId;
  }
  addTodo(todo: TodoInterface): void { 
    this.todoList.push(todo);
  }
  getChargeSheetBystatuscompleted() : TodoInterface[] {
    return this.todoList.filter((task) => task.status === 'completed')
  }
  getChargeSheetBystatusInProgress() : TodoInterface[] {
    return this.todoList.filter((task) => task.status === 'inprogress');
  }

  updateTodoStatus(id: number, completed: boolean): void {
    const todo = this.todoList.find(item => item.id === id);
    if (todo) {
      todo.status = 'completed';
    }
  }
  updateTodo(updatedTodo: TodoInterface): void {
    const index = this.todoList.findIndex(item => item.id === updatedTodo.id);
    if (index !== -1) {
      this.todoList[index] = updatedTodo;
    }
  }
}

