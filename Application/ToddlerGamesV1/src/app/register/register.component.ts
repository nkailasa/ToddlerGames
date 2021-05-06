import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../local-storage.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private localStorage:LocalStorageService) {  
    // sample user
    // var temp = {'user@gmail.com':['user','pass']}
    console.log(JSON.parse(this.localStorage.get("users")))
  }

  ngOnInit(): void {
  }

  register(): void{
    var username:any = document.getElementById("username");
    var email:any = document.getElementById("email");
    var password1:any= document.getElementById("password1");
    var password2:any = document.getElementById("password2");
    var users = JSON.parse(this.localStorage.get("users"))
    console.log(users)
    if(users != null){
      if(users.hasOwnProperty(email.value)){
        alert("Email already registered")
      }
      else if(password1.value != password2.value){
        alert("Passwords don't match")
      }
      else{
        users[email.value] = [username.value, password2.value]
        console.log("users = "+JSON.stringify(users))
        alert("wait")
        this.localStorage.set("users",JSON.stringify(users));  
      }
    }
    }
}
