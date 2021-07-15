import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  firstForm;
  secondForm;
  thirdForm;
  fourthForm;
  fifthForm;

  constructor() { }

  ngOnInit() {
    this.firstForm = JSON.parse(localStorage.getItem('firstFormGroup'));
    this.secondForm = JSON.parse(localStorage.getItem('secondFormGroup'));
    this.thirdForm = JSON.parse(localStorage.getItem('thirdFormGroup'));
    this.fourthForm = JSON.parse(localStorage.getItem('fourthFormGroup'));
    this.fifthForm = JSON.parse(localStorage.getItem('fifthFormGroup'));
  }

}
