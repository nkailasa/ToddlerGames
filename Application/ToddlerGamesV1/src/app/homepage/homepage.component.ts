import { Component, OnInit } from '@angular/core';
import {MatRadioButton, MatRadioChange} from '@angular/material/radio';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public username:string="Guest2031";
  constructor(private localStorage: LocalStorageService) {
    
    var user = JSON.parse(this.localStorage.get("loggedInUser"))
    if(user != null){
      this.username = user['values'][1]
    }
    
  }

  public outlineEnable:boolean =true;

  ngOnInit(): void {
    localStorage.removeItem("level");
    var temp = localStorage.getItem("username");
    if(temp!=null)
      this.username=temp;
  }

  onLevelChange(mrChange: MatRadioChange) {
     localStorage.setItem("level", mrChange.value);
  }

}
