import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  title = 'mi componente angular';
  initialValue = 0;
  constructor() {}

  ngOnInit(): void {
  }

  showData(ev: any):void {
    this.initialValue = ev.detail.counter;
  }

}
