import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { User } from '../models/user.mode';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  admin = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
    ) {}

  ngOnInit() {}

  async login(admin: User){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Please wait..."
    });
    (await loader).present();
    
    try {
      await this.afAuth
      .signInWithEmailAndPassword(admin.email, admin.password)
      .then (data => {
          console.log(data);

      //redirect to home page
      this.navCtrl.navigateRoot("adminhome");
      })
    } catch (e) {
      this.showToast(e);
    }
   
    //dismis loader
    (await loader).dismiss();
    }
  }
  
  formValidation(){
    if(!this.admin.email){
      this.showToast("Enter email");
      return false;
    }

    if(!this.admin.password){
      this.showToast("Enter password");
      return false;
    }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}
