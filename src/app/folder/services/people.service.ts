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
      picture:"https://pbs.twimg.com/media/Ea9xEW7WAAMSnv2.jpg"
    },
    {
      id:2,
      name:"Kanye",
      surname:"West",
      nickname:"Ye",
      picture:"https://media.wired.com/photos/63226fd374ce5b82a68ef212/master/w_2560%2Cc_limit/Kanye-West-Black-Skinhead-Excerpt-Culture-1205198865.jpg"
    },
    {
      id:3,
      name:"Rosalia",
      surname:"Vila",
      nickname:"Rosalia",
      picture:"http://www.diarioelnorte.com.ar/wp-content/uploads/2022/01/f.elconfidencial.com_original_838_c61_47e_838c6147e5ddd380aa6732dc996859d3.jpg"
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
    }
    
  }
}
