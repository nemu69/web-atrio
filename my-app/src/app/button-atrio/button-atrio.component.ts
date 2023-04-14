import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-atrio',
  templateUrl: './button-atrio.component.html',
  styleUrls: ['./button-atrio.component.css']
})
export class ButtonAtrioComponent implements OnInit {


	@Input() label = 'Button';
  constructor() { }

  ngOnInit() {
  }

}
