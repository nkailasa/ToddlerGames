import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from './../local-storage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public username:string="Guest2031";
  public email:string="Guest User";
  public loggedin = false;
  constructor(private localStorage: LocalStorageService, private router: Router) {
    
    var user = JSON.parse(this.localStorage.get("loggedInUser"))
    if(user != null){
      this.username = user['values'][1]
      this.email = user['values'][0]
      this.loggedin = true
    }
  } 
  ngOnInit(): void {
  }

  public signOut():void{
    this.localStorage.remove("loggedInUser")
    this.router.navigate(['/'])
    this.loggedin=false
  }
}
