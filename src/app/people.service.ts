import { Injectable } from '@angular/core';
import { PEOPLE } from './mock-people';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';

function capNames(people: any[]){
  return people.map(p => {
    const nameCap = p.name.toUpperCase();
    return {
      name: nameCap,
      phone: p.phone,
      email: p.email
    }
  });
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  private peopleUrl = 'https://jsonplaceholder.typicode.com/users';  // URL to web api

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.peopleUrl)
      .pipe(map(capNames));
  }

  // getPeople(): object[] {
  //   return PEOPLE;
  // }
}
