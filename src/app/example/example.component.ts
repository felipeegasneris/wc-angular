import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  title = 'mi componente angular';
  initialValue = 0;
  constructor() {
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      'https://wc-base.netlify.app/repo.0d01a177.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  ngOnInit(): void {
  }

  showData(ev: any):void {
    console.log(ev.detail);
    this.initialValue = ev.detail.counter;
  }

}
