import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _people:Person[] = [
    {
      id:1,
      name:"Juan Alberto",
      surname:"García",
      nickname:"Illojuan",
      picture:"https://pbs.twimg.com/media/Ea9xEW7WAAMSnv2.jpg",
      age:28
    },
    {
      id:2,
      name:"Kanye",
      surname:"West",
      nickname:"Ye",
      picture:"https://media.wired.com/photos/63226fd374ce5b82a68ef212/master/w_2560%2Cc_limit/Kanye-West-Black-Skinhead-Excerpt-Culture-1205198865.jpg",
      age:45
    },
    {
      id:3,
      name:"Elon",
      surname:"Musk",
      nickname:"Elon",
      picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Elon_Musk_Colorado_2022_%28cropped%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped%29.jpg",
      age:51
    }
  ];

  id:number = this._people.length+1;
  constructor() { }

  getPeople(){
    return this._people;
  }

  getPersonById(id:number){
    return this._people.find(p=>p.id==id);
  }

  deletePersonById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
  }

  addPerson(person:Person){
    person.id = this.id++;
    this._people.push(person);
  }

  updatePerson(person:Person) {
    var _person = this._people.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.surname = person.surname;
      _person.nickname = person.nickname;
      _person.picture = person.picture;
      _person.age = person.age;
    }
    
  }
}
