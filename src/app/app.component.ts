import { Component, HostListener } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isShow: boolean;
  topPosToStartShowing = 100;
  userName: any;
  userEmail: any;
  userPhoneno: any;
  userMessage: any;

  constructor(public http: HttpClient) {

  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  sendMail() {
    const user = {
      Name: this.userName,
      Email: this.userEmail,
      contact: this.userPhoneno ? this.userPhoneno : this.userEmail,
      message: this.userMessage,
    };
    console.log(user);
    if(!this.userName && !this.userEmail && !this.userMessage){
      document.getElementById('myForm').style.display = 'none';
      return;
    }
    this.http.post('https://nation-innovation-backend.herokuapp.com/sendmail', user).subscribe(
      data => {
        const res: any = data;
        console.log(
          `${user.Name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }
    );
    document.getElementById('myForm').style.display = 'none';
    alert("Email successfully sent");
  }
}
