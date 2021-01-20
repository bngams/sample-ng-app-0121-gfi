import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  name = 'Boris';
  today = new Date();
  imgUrl = 'https://via.placeholder.com/150';
  logoColor = 'black';
  isDisabled = true;
  fruits = ['orange', 'banana', 'lemon'];

  @Output()
  buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.changeImg();
  }

  /**
   * Change image URL
   * Simulate async treaatment
   */
  changeImg(): void {
    setTimeout(() => {
      this.imgUrl = 'https://via.placeholder.com/250';
    }, 2000);
  }

  clickMe(): void {
    console.log('Button clicked');
    this.buttonClicked.emit('New title');
  }

  toggleState(): void {
    this.isDisabled = !this.isDisabled;
  }

}
