import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
	
	@Input() progress = 50;
	@Input() label = 'Progress';

	progressSubject = new BehaviorSubject<number>(this.progress);

	setStyle() {
		console.log(this.progress);
		if (this.progress >= 0 && this.progress <= 25) {
		  this.elementRef.nativeElement.querySelector('.progress').style.backgroundColor = '#7160E8';
		} else if (this.progress > 25 && this.progress <= 50) {
		  this.elementRef.nativeElement.querySelector('.progress').style.backgroundColor = '#60ADE8';
		} else if (this.progress > 50 && this.progress <= 75) {
		  this.elementRef.nativeElement.querySelector('.progress').style.backgroundColor = '#60E8B6';
		} else {
		  this.elementRef.nativeElement.querySelector('.progress').style.backgroundColor = '#30DB63';
		}
	  }
	
	  constructor(private elementRef: ElementRef) { }
	  
	  ngOnInit() {
		  this.setStyle();
	}
	onChange() {
	  this.setStyle();
	}


}
