import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.page.html',
  styleUrls: ['./edit-job.page.scss'],
})
export class EditJobPage implements OnInit {

  myDate: any;
  minDate: any;
  maxDate: any;
  datesArray = [];

  
  post = {} as Post;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
    ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.getPostById(this.id);
    this.myDate = new Date();
    const minDate = new Date();
    minDate.setHours(10, 0, 0, 0);
    this.minDate = minDate.toISOString();
    const maxDate = new Date();
    maxDate.setHours(22, 0, 0, 0);
    this.maxDate = maxDate.toISOString();
  }

  async getPostById(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();

  this.firestore.doc("booking/" + id)
  .valueChanges()
  .subscribe(data => {

    this.post.barbermessage = data["barbermessage"];
    this.post.status = data["status"];
  });
  //dismiss loader
  (await loader).dismiss();
  }

  async updatePost(post: Post){
    if(this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
      message: "Please wait..."
      });
      (await loader).present();
  
      try{
       
        await this.firestore.doc("booking/" + this.id).update(post);
      } catch(e){
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
  
      //redirect to view post page
      this.navCtrl.navigateRoot("adminhome");
      }
  }

  formValidation(){
    if(!this.post.status){
      this.showToast("Enter status");
      return false;
    }

    if(!this.post.barbermessage){
      this.showToast("Enter some message to customer");
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
  }
}
