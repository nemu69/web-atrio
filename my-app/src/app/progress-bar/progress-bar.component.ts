import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
	
	@Input() progress = 50;
  constructor() { }

  ngOnInit() {
  }


}
