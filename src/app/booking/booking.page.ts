import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  post = {} as Post;
  myDate: any;
  minDate: any;
  maxDate: any;
  datesArray = [];
  
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
   
  ) {}

  ngOnInit() { this.myDate = new Date();
    const minDate = new Date();
    minDate.setHours(10, 0, 0, 0);
    this.minDate = minDate.toISOString();
    const maxDate = new Date();
    maxDate.setHours(22, 0, 0, 0);
    this.maxDate = maxDate.toISOString();
  }
    setDate(post: Post) {
      this.minDate = this.post;
      this.datesArray.push(this.post);
    }

  async createPost(post: Post){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("booking").add(post);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.navCtrl.navigateRoot("schedule");
    }
  }
  
  formValidation(){
    if(!this.post.name){
      this.showToast("Enter name");
      return false;
    }

    if(!this.post.date){
      this.showToast("Enter date");
      return false;
    }

    if(!this.post.service){
      this.showToast("Enter service");
      return false;
    }

    if(!this.post.message){
      this.showToast("Enter message");
      return false;
    }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }}
