import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider, User } from '../../providers/auth/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser :User;

  constructor(public navCtrl: NavController, public auth: AuthProvider) {
    this.currentUser = auth.getUserInfo();
  }

}
