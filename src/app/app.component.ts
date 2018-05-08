import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Table Exercise';

  people: object[] = [];

  filterText: string = '';
 
  constructor(private peopleService: PeopleService) { }
 
  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(people => this.people = people);
  }

  meetsFilter(person: any) {
    const filterTextNorm = this.filterText.toLowerCase();
    if(!filterTextNorm){
      return true;
    } else {
      let personString = person.name + person.email + person.phone;
      personString = personString.toLowerCase();
      if(personString.includes(filterTextNorm)){
        return true;
      } else {
        return false;
      }
    }
  }
}
