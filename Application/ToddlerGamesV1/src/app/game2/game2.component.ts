import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss']
})
export class Game2Component implements OnInit {
  easyLetters: string[];
  mediumWords: string[];
  hardWords: string[];
  score: number = 0;
  level: string | null;
  gamelost: boolean;
  gamewon: boolean;
  constructor(private localStorage: LocalStorageService) {
    this.easyLetters = ["A", "B", "N", "K", "S"];
    this.mediumWords = ["AN", "BE", "NO", "SO", "OK"];
    this.hardWords = ["DAD", "SKY", "NOT", "KID", "MOM", "ANT"];
    this.level = "1";
    this.gamewon = false;
    this.gamelost = false;
  }

  A = "../../assets/game2/easy/A.png";
  N = "../../assets/game2/easy/N.png";
  B = "../../assets/game2/easy/B.png";
  K = "../../assets/game2/easy/K.png";
  S = "../../assets/game2/easy/S.png";
  pop = "../../assets/game2/easy/pop.png";

  ngOnInit(): void {

    this.level = localStorage.getItem("level");
    if (this.level == null)
      this.level = "1";
    if (this.level == "1") {
      this.A = "../../assets/game2/easy/A.png";
      this.N = "../../assets/game2/easy/N.png";
      this.B = "../../assets/game2/easy/B.png";
      this.K = "../../assets/game2/easy/K.png";
      this.S = "../../assets/game2/easy/S.png";
      this.pop = "../../assets/game2/easy/pop.png";
    } else if (this.level == "2") {
      this.A = "../../assets/game2/medium/An.png";
      this.N = "../../assets/game2/medium/No.png";
      this.B = "../../assets/game2/medium/Be.png";
      this.K = "../../assets/game2/medium/Ok.png";
      this.S = "../../assets/game2/medium/So.png";
      this.pop = "../../assets/game2/medium/pop.png";
    } else if (this.level == "3") {
      this.A = "../../assets/game2/hard/Ant.png";
      this.N = "../../assets/game2/hard/Not.png";
      this.B = "../../assets/game2/hard/Dad.png";
      this.K = "../../assets/game2/hard/Kid.png";
      this.S = "../../assets/game2/hard/Mom.png";
      this.pop = "../../assets/game2/hard/pop.png";
    }
  }

  openHelp() {
    document.getElementById("myModal")!.style.display = "block";
  }
  closeModal() {
    document.getElementById("myModal")!.style.display = "none";
  }



  typeInput: any;
  onKey(event: any) { // without type info
    if (this.level == "1") {
      localStorage.setItem("game2EasyScore", this.score.toString());
    } else if (this.level == "2") {
      localStorage.setItem("game2MedScore", this.score.toString());
    } else if (this.level == "3") {
      localStorage.setItem("game2HardScore", this.score.toString());
    }
    if (this.score == 100) {
      document.getElementById("win")!.style.display = "";
      this.gamewon = true;
      this.gamelost = false;
    } else {
      var typedLetter = event.target.value.toUpperCase();
      console.log(typedLetter);
      console.log(this.level);
      if (this.level == "1") {
        var idx = this.easyLetters.indexOf(typedLetter);
        if (idx == -1) {
          document.getElementById("wrong")!.style.display = "";
          this.gamewon = false;
          this.gamelost = true;
        }
        else {
          this.easyLetters.splice(idx, 1);
          this.score += 20;
          if (this.score == 100) {
            document.getElementById("win")!.style.display = "";
            this.gamewon = true;
            this.gamelost = false;
          }
          localStorage.setItem("game2EasyScore", this.score.toString());
          event.target.value = '';
          console.log(this.score);
          document.getElementById("wrong")!.style.display = "none";
          this.gamelost = false;
          if (typedLetter == "A")
            this.A = this.pop;
          if (typedLetter == "B")
            this.B = this.pop;
          if (typedLetter == "N")
            this.N = this.pop;
          if (typedLetter == "K")
            this.K = this.pop;
          if (typedLetter == "S")
            this.S = this.pop;
        }

      }
      else if (this.level == "2") {
        var midx = this.mediumWords.indexOf(typedLetter);
        if (typedLetter.length < 2) {
          document.getElementById("typemore")!.style.display = "";
          this.gamelost = false;
          this.gamewon = false;
        }
        else if (midx == -1) {
          document.getElementById("again")!.style.display = "";
          document.getElementById("typemore")!.style.display = "none";
          this.gamelost = true;
          this.gamewon = false;
        }
        else {
          this.mediumWords.splice(midx, 1);
          this.score += 20;
          if (this.score == 100) {
            document.getElementById("win")!.style.display = "";
            this.gamewon = true;
          }
          localStorage.setItem("game2MedScore", this.score.toString());
          event.target.value = '';
          this.gamelost = false;
          document.getElementById("again")!.style.display = "none";
          document.getElementById("typemore")!.style.display = "none";
          if (typedLetter == "AN")
            this.A = this.pop;
          if (typedLetter == "BE")
            this.B = this.pop;
          if (typedLetter == "NO")
            this.N = this.pop;
          if (typedLetter == "OK")
            this.K = this.pop;
          if (typedLetter == "SO")
            this.S = this.pop;
        }
      }
      else if (this.level == "3") {
        var hidx = this.hardWords.indexOf(typedLetter);
        if (typedLetter.length < 3) {
          document.getElementById("typemore")!.style.display = "";
          this.gamelost = false;
          this.gamewon = false;
        }
        else if (hidx == -1) {
          document.getElementById("again")!.style.display = "";
          document.getElementById("typemore")!.style.display = "none";
          this.gamelost = true;
          this.gamewon = false;
        }
        else {
          this.hardWords.splice(hidx, 1);
          this.score += 20;
          this.gamelost = false;
          if (this.score == 100) {
            document.getElementById("win")!.style.display = "";
            this.gamewon = true;
          }
          localStorage.setItem("game2HardScore", this.score.toString());
          event.target.value = '';
          document.getElementById("again")!.style.display = "none";
          document.getElementById("typemore")!.style.display = "none";
          if (typedLetter == "ANT")
            this.A = this.pop;
          if (typedLetter == "DAD")
            this.B = this.pop;
          if (typedLetter == "NOT")
            this.N = this.pop;
          if (typedLetter == "KID")
            this.K = this.pop;
          if (typedLetter == "MOM")
            this.S = this.pop;
        }
      }
    }
  }


  public position1: object = { X: 160, Y: 14 };
  public position2: object = { X: 160, Y: 240 };
  public position3: object = { X: 100, Y: 14 };
  public position4: object = { X: 100, Y: 240 };
}