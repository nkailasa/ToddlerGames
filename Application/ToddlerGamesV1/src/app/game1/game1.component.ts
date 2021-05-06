import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SVGService } from './svg.service';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss'],
})

export class Game1Component implements OnInit {
  title = 'Drag & Drop Shapes';
  lvl:string = "1";

  constructor(private localStorage: LocalStorageService, private svgService: SVGService) {

  }

  ngOnInit(): void {
    console.log ("init ");
    var level = localStorage.getItem("level");
    this.lvl = level==null? "1":level;
    if (level == null) {
      level = "1";
    }
    console.log ("level: " + level);

    document.getElementById("items-container-easy")!.style.display = "none";
    document.getElementById("dropzone-container-easy")!.style.display = "none";
    document.getElementById("items-container-medium")!.style.display = "none";
    document.getElementById("dropzone-container-medium")!.style.display = "none";
    document.getElementById("items-container-hard")!.style.display = "none";
    document.getElementById("dropzone-container-hard")!.style.display = "none";

    if (level == "1") {
      document.getElementById("items-container-easy")!.style.display = "";
      document.getElementById("dropzone-container-easy")!.style.display = "";
    } else if (level == "2") {
      document.getElementById("items-container-medium")!.style.display = "";
      document.getElementById("dropzone-container-medium")!.style.display = "";
    } else if (level == "3") {
      document.getElementById("items-container-hard")!.style.display = "";
      document.getElementById("dropzone-container-hard")!.style.display = "";
    }
  }

  openHelp(){
    document.getElementById("myModal")!.style.display = "block";
  }
  closeModal(){
    document.getElementById("myModal")!.style.display = "none";
  }

    onDragEnded(event:any): void {
        event.source.element.nativeElement.style.transform = 'none' // visually reset element to its origin
        const source: any = event.source
        source._passiveTransform = { x: 0, y: 0 } // make it so new drag starts from same origin
    }
}
