import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-atrio',
  templateUrl: './button-atrio.component.html',
  styleUrls: ['./button-atrio.component.scss']
})
export class ButtonAtrioComponent implements OnInit {


	@Input() label = 'Button';
	@Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitClick() {
	this.onClick.emit();
  }

}
