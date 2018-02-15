import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})

export class TestPage {

  testData = {};

  constructor(public navCtrl: NavController) {

    this.testData = {
      msg: "Message"
    }

  }

}
