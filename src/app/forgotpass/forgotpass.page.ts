import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  firebaseConfig :{
    apikey: "",
    authDomain: "",
    projectId: "",
  }

  //put your firebase project details in above object from firebase console
  email:string="";
  constructor() { }

  ngOnInit() 
  {
    if(firebase.apps.length == 0)
    {
      firebase.initializeApp(this.firebaseConfig);
    }

  }

  sendResetLink()
  {
    firebase.auth().sendPasswordResetEmail(this.email)
    .then(()=>{
      alert("reset link send to your mail");
    },(err)=>{
      alert(JSON.stringify(err))
    })
  }

}