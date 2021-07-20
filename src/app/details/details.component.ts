import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() firstForm;
  @Input() secondForm;
  @Input() thirdForm;
  @Input() fourthForm;
  @Input() fifthForm;

  constructor() { }

  ngOnInit() {

  }

}
