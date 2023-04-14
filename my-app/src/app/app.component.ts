import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

   progressBar1 = 50;
   progressBar2 = 25;

   setAllProgressBars(progress: number) {
	 this.progressBar1 = progress;
	 this.progressBar2 = progress;
   }

   addAllProgressBars(progress: number) {
	 this.progressBar1 += progress;
	 this.progressBar2 += progress;
   }
}
