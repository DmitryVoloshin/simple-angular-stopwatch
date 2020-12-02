import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})





export class AppComponent {
title = 'test'



  startTime;
  currentTime;
  offset = 0;

  timerActive: Boolean = false;

  timer = 0;
  timerId;

  buttonText = 'start'

  counter() {
    this.currentTime = new Date().getTime();
    this.timer = this.currentTime - this.startTime + this.offset;
    this.timerId = setTimeout(this.counter.bind(this), 100);
  }



// Getting time
  getTimeStringMinutes() {
    let timeString = new Date(this.timer);

    let minutes = timeString.getMinutes();
    return minutes;
  }

  getTimeStringSeconds() {
    let timeString = new Date(this.timer);

    let seconds = timeString.getSeconds();
    return seconds;
  }

  getTimeStringMilliseconds() {
    let timeString = new Date(this.timer);

    let milliseconds = timeString.getMilliseconds();
    return milliseconds;
  }

 //*****************Buttons Actions ******************************/





  onRunToggle() {
    this.timerActive = !this.timerActive;
    if(this.timerActive){
      this.buttonText = 'stop'
      this.startTime = new Date().getTime();
      this.counter();
    }else{
      this.buttonText = 'start'
      //*****************************If need to save the results *******************/
      // this.offset = this.timer;
      // clearTimeout(this.timerId);
      
      this.timer = 0;
      this.offset = 0; 
      this.timerActive = false;
      clearTimeout(this.timerId);
    }
  }

  onWait(){
    if (!this.timerActive) return;
    this.timerActive = false;
    this.offset = this.timer;
    this.buttonText = 'start'
    clearTimeout(this.timerId);
  }
 
  onReset() {
    this.buttonText="stop"
    this.timer = 0;
    this.offset = 0; 
    clearTimeout(this.timerId);
    this.startTime = new Date().getTime();
    this.counter();
  }

}