import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private localStorage:LocalStorageService, private router: Router ) { }

  ngOnInit(): void {
  }


  public login(){
    // email and password
    var username:any = document.getElementById("username");
    var password:any = document.getElementById("password");
    // if(username!=null && password!= null){
    //   alert( (<HTMLInputElement>username).value=="user21");
    //   alert((<HTMLInputElement>password).value=="pass");
    // }
    
    var users = JSON.parse(this.localStorage.get("users"))
    console.log(users)
    if(users != null){
      if(users.hasOwnProperty(username.value)){
        if(users[username.value][1] == password.value){
          alert("Login success")
          this.router.navigate(['/app-homepage'])
          .then(success => console.log('navigation success?' , success))
          .catch(console.error);
          // adding email and player name
          this.localStorage.set("loggedInUser",JSON.stringify({'values':[username.value,users[username.value][0]]}))
        }
        else{
          alert("Incorrect Password")
        }
      }
      else{
        alert("Email isn't registered")
      }
      }
  }

}
