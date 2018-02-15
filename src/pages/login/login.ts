import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { HomePage } from '../../pages/home/home'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  credentials = {
    email: '',
    password: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public auth: AuthProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

      this.menuCtrl.swipeEnable(false);

  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.credentials).subscribe(
      allowed => {
        if (allowed) {
          this.menuCtrl.swipeEnable(true);
          this.navCtrl.setRoot(HomePage);
        } else {
          this.showError("Invalid Credentials");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
