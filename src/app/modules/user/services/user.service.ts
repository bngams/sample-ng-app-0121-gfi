import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  session = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  hello(): void {
    console.log('hello from user service');

    // Observer(s) => subscribe => Observable (subscriber)
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      // simulate async treatment
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 3000);
    });

    // observer
    const observer = {
      next: (result) => console.log('next', result),
      error: (err) => console.log('error', err),
      complete: () => console.log('complete'),
    };

    // use observable
    observable.subscribe(observer);

    observable.subscribe({
      next: (result) => console.log('next', result),
      error: (err) => console.log('error', err)
    });

    observable.subscribe(result => console.log('next', result));
  }

  connect(): void {
    setTimeout(() => {
      this.session.next(true);
    }, 3000);
  }

  getUser(): Observable<any> {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/users/1');
    // .pipe(
    //   map(u => u.name = u.name.toUppercase)
    // );
  }

}
