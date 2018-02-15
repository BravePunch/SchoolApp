import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class User {
  firstName: string;
  lastName: string;
  email: string;
  rights: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName
    this.email = email;
  }
}

@Injectable()
export class AuthProvider {

  private currentUser: User;

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // TODO: Vérification par serveur
        let access = (credentials.password === "password" && credentials.email === "email");
        this.currentUser = new User('Guest', 'e@mail.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {

  }

  public logout() {

  }

  public getUserInfo(): User {
    return this.currentUser;
  }

}
