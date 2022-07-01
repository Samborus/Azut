import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jser',
  templateUrl: './jser.component.html',
  styleUrls: ['./jser.component.scss']
})
export class JserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scripting();
  }
  p1: string = "";

  private scripting() {
    let x = Math.PI;  
    this.p1 = x.valueOf().toString();  
  }

}
