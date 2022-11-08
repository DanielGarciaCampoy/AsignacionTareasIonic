import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _tasks:Task[] = [
    {
      id:1,
      name:"Tarea 1",
      durationInSecs:3600,
      picture: "https://img1.freepng.es/20171220/zte/number-1-png-5a3ab53c779c24.4291118215137969244899.jpg",
      description: "Primera tarea"
    },
    {
      id:2,
      name:"Tarea 2",
      durationInSecs:7200,
      picture: "https://site.educa.madrid.org/cp.rodriguezdelafu.coslada//wp-content/uploads/cp.rodriguezdelafu.coslada/2020/04/NUMERO-2.png",
      description: "Segunda tarea"
    }
  ];

  id:number = this._tasks.length+1;

  constructor() { }

  getTasks(){
    return this._tasks;
  }

  getTaskById(id:number){
    return this._tasks.find(t=>t.id==id);
  }

  deleteTaskById(id:number){
    this._tasks = this._tasks.filter(t=>t.id != id); 
  }

  addTask(task:Task){
    task.id = this.id++;
    this._tasks.push(task);
  }

  updateTask(task:Task){
    var _task = this._tasks.find(t=>t.id==task.id);
    if(_task){
      _task.name = task.name;
      _task.durationInSecs = task.durationInSecs;
      _task.picture = task.picture;
      _task.description = task.description;
    }
    
  }

}
