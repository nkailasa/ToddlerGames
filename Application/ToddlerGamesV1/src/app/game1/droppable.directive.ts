import { Directive, HostListener } from '@angular/core';
import { SVGService } from './svg.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  private draggingElement: any;
  private score = 0;
  private svgPoint: any;
  private mouseDownPoint_x: any;
  private mouseDownPoint_y: any;
  gamewon: boolean;

  constructor(private svgService: SVGService) {
         this.gamewon = false;

  }

  @HostListener('drop', ['$event'])
  onDrop(event:any) {
    console.log('drop' + event.target.getAttribute("id"));
    const dropzone = event.target.childNodes[0];
    const droppedElementId = event.dataTransfer.getData('text');
    const droppedElement = document.getElementById(droppedElementId)!.cloneNode(true) as any;

    dropzone.appendChild(droppedElement);
    droppedElement.setAttribute('draggable', true);

    const svgPoint = this.svgService.getSVGPoint(event, droppedElement);
    this.setPosition(droppedElement, { x: svgPoint.x, y: svgPoint.y  });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event:any): void {
    if (this.draggingElement) {
      const svgPoint = this.svgService.getSVGPoint(event, this.draggingElement);
      this.setPosition(this.draggingElement, { x: svgPoint.x, y: svgPoint.y  });
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event:any): void {
    if (event.target.getAttribute('draggable')) {
      console.log('draggable element: ' + event.target);
      this.draggingElement = event.target;
      this.svgPoint = this.svgService.getSVGPoint(event, this.draggingElement);

      console.log('mouse down point: ' + this.svgPoint.x + ", " + this.svgPoint.y);
      console.log('mouse down point1: ' + event.x + ", " + event.y);
      this.mouseDownPoint_x = event.x;
      this.mouseDownPoint_y = event.y;
    }
  }

  easyLevel () {

    var AABB = {
      collide: function (el1:any, el2:any) {
        if (el1 == null || el2 == null || el1.getAttribute("id") == el2.getAttribute("id")) {
          return false;
        }
        var rect1 = el1.getBoundingClientRect();
        var rect2 = el2.getBoundingClientRect();

        var col = !(
          rect1.top > (rect2.bottom) ||
          rect1.right < (rect2.left) ||
          rect1.bottom < (rect2.top) ||
          rect1.left > (rect2.right)
        );

        var type_match = el1.getAttribute("type") == el2.getAttribute("type");

        if (type_match) {
                  console.log(rect1.top + ", " + rect2.bottom);
                  console.log(rect1.right + ", " + rect2.left);
                  console.log(rect1.bottom + ", " + rect2.top);
                  console.log(rect1.left + ", " + rect2.right);
        } else {
          console.log("type mismatch: ", el1.getAttribute("type") +
          ", " + el2.getAttribute("type") + ", " + el1.getAttribute("id")
           + ", " + el2.getAttribute("id"));
        }

        return col && type_match;
      },
    };

        const rectangle1 = document.getElementById("easy-rectangle1");
        const triangle1 = document.getElementById("easy-triangle1");
        const square1 = document.getElementById("easy-square1");
        const rectangle11 = document.getElementById("easy-rectangle11");
        const square12 = document.getElementById("easy-square12");

        var overlapping_element = null;
        if (AABB.collide(rectangle1, this.draggingElement)) {
          overlapping_element = rectangle1;
        } else if (AABB.collide(triangle1, this.draggingElement)) {
          overlapping_element = triangle1;
        } else if (AABB.collide(square1, this.draggingElement)) {
          overlapping_element = square1;
        } else if (AABB.collide(rectangle11, this.draggingElement)) {
          overlapping_element = rectangle11;
        } else if (AABB.collide(square12, this.draggingElement)) {
          overlapping_element = square12;
        }

        return overlapping_element;
  }


  mediumLevel () {

    var AABB = {
      collide: function (el1:any, el2:any) {
        if (el1 == null || el2 == null || el1.getAttribute("id") == el2.getAttribute("id")) {
          return false;
        }
        var rect1 = el1.getBoundingClientRect();
        var rect2 = el2.getBoundingClientRect();

        var col = !(
          rect1.top > (rect2.bottom) ||
          rect1.right < (rect2.left) ||
          rect1.bottom < (rect2.top) ||
          rect1.left > (rect2.right)
        );

        var type_match = el1.getAttribute("type") == el2.getAttribute("type");

        if (type_match) {
                  console.log(rect1.top + ", " + rect2.bottom);
                  console.log(rect1.right + ", " + rect2.left);
                  console.log(rect1.bottom + ", " + rect2.top);
                  console.log(rect1.left + ", " + rect2.right);
        } else {
          console.log("type mismatch: ", el1.getAttribute("type") +
          ", " + el2.getAttribute("type") + ", " + el1.getAttribute("id")
           + ", " + el2.getAttribute("id"));
        }

        return col && type_match;
      },
    };

        const hexagon1 = document.getElementById("medium-hexagon1");
        const rectangle1 = document.getElementById("medium-rectangle1");
        const triangle1 = document.getElementById("medium-triangle1");
        const circle1 = document.getElementById("medium-circle1");
        const square1 = document.getElementById("medium-square1");

        var overlapping_element = null;
        if (AABB.collide(hexagon1, this.draggingElement)) {
          overlapping_element = hexagon1;
        } else if (AABB.collide(rectangle1, this.draggingElement)) {
          overlapping_element = rectangle1;
        } else if (AABB.collide(triangle1, this.draggingElement)) {
          overlapping_element = triangle1;
        } else if (AABB.collide(circle1, this.draggingElement)) {
          overlapping_element = circle1;
        } else if (AABB.collide(square1, this.draggingElement)) {
          overlapping_element = square1;
        }

        return overlapping_element;
  }

  hardLevel () {
    var AABB = {
      collide: function (el1:any, el2:any) {
        if (el1 == null || el2 == null || el1.getAttribute("id") == el2.getAttribute("id")) {
          return false;
        }
        var rect1 = el1.getBoundingClientRect();
        var rect2 = el2.getBoundingClientRect();

        var col = !(
          rect1.top > (rect2.bottom) ||
          rect1.right < (rect2.left) ||
          rect1.bottom < (rect2.top) ||
          rect1.left > (rect2.right)
        );

        var type_match = el1.getAttribute("type") == el2.getAttribute("type");

        if (type_match) {
                  console.log(rect1.top + ", " + rect2.bottom);
                  console.log(rect1.right + ", " + rect2.left);
                  console.log(rect1.bottom + ", " + rect2.top);
                  console.log(rect1.left + ", " + rect2.right);
                  console.log("type match: ", el1.getAttribute("type") +
                  ", " + el2.getAttribute("type") + ", " + el1.getAttribute("id")
                   + ", " + el2.getAttribute("id"));
        } else {
          console.log("type mismatch: ", el1.getAttribute("type") +
          ", " + el2.getAttribute("type") + ", " + el1.getAttribute("id")
           + ", " + el2.getAttribute("id"));
        }

        return col && type_match;
      },
    };

        const hexagon1_blue = document.getElementById("hard-hexagon1-blue");
        const rectangle1_light_blue = document.getElementById("hard-rectangle1-light-blue");
        const triangle1_red = document.getElementById("hard-triangle1-red");
        const circle1_green = document.getElementById("hard-circle1-green");
        const star1_golden = document.getElementById("hard-star1-golden");

        const hexagon1_red = document.getElementById("hard-hexagon1-red");
        const rectangle1_green = document.getElementById("hard-rectangle1-green");
        const triangle1_light_blue = document.getElementById("hard-triangle1-light-blue");
        const circle1_black = document.getElementById("hard-circle1-black");
        const square1_blue = document.getElementById("hard-square1-blue");

        var overlapping_element = null;
        if (AABB.collide(hexagon1_blue, this.draggingElement)) {
          overlapping_element = hexagon1_blue;
        } else if (AABB.collide(rectangle1_light_blue, this.draggingElement)) {
          overlapping_element = rectangle1_light_blue;
        } else if (AABB.collide(triangle1_red, this.draggingElement)) {
          overlapping_element = triangle1_red;
        } else if (AABB.collide(circle1_green, this.draggingElement)) {
          overlapping_element = circle1_green;
        } else if (AABB.collide(star1_golden, this.draggingElement)) {
          overlapping_element = star1_golden;
        } else if (AABB.collide(hexagon1_red, this.draggingElement)) {
          overlapping_element = hexagon1_red;
        } else if (AABB.collide(rectangle1_green, this.draggingElement)) {
          overlapping_element = rectangle1_green;
        } else if (AABB.collide(triangle1_light_blue, this.draggingElement)) {
          overlapping_element = triangle1_light_blue;
        } else if (AABB.collide(circle1_black, this.draggingElement)) {
          overlapping_element = circle1_black;
        } else if (AABB.collide(square1_blue, this.draggingElement)) {
          overlapping_element = square1_blue;
        }

        return overlapping_element;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event:any): void {
    console.log('mouseup' + event.target.getAttribute("id"));

    var level = localStorage.getItem("level");
    if (level == null) {
      level = "1";
    }
    console.log ("level - droppable: " + level);
    var overlapping_element = null;
    var inc_score = 0;
    if (level == "1") {
      overlapping_element = this.easyLevel();
      inc_score = 20;
    } else if (level == "2") {
      overlapping_element = this.mediumLevel();
      inc_score = 20;
    } else if (level == "3") {
      overlapping_element = this.hardLevel();
      inc_score = 10;
    }


    if (overlapping_element != null) {
      overlapping_element.setAttribute("display", "none");
      this.draggingElement.setAttribute("display", "none");
      this.score = this.score + inc_score;

      var scoreElement = document.getElementById('score');
      scoreElement!.innerHTML = "<h1><b>Score:" + this.score + "/100"+"</b></h1>";
      document.getElementById("wrong")!.style.display = "none";
      if (level == "1") {
        localStorage.setItem("game1EasyScore", this.score.toString());
      } else if (level == "2") {
        localStorage.setItem("game1MedScore", this.score.toString());
      } else if (level == "3") {
        localStorage.setItem("game1HardScore", this.score.toString());
      }
      if (this.score == 100) {
        document.getElementById("win")!.style.display = "";
              this.gamewon = true;

      }

    } else {
      document.getElementById("wrong")!.style.display = "";
    }

    this.draggingElement = null;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event:any): void {
  }

  private setPosition(element:any, coord: { x:any, y:any }) {
    element.setAttribute('cx', coord.x);
    element.setAttribute('cy', coord.y);
  }
}
