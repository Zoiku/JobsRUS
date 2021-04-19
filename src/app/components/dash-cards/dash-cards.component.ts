import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dash-cards',
  templateUrl: './dash-cards.component.html',
  styleUrls: ['./dash-cards.component.scss'],
})
export class DashCardsComponent implements OnInit {
  @Input() title:string;
  @Input() figure:number;

  constructor() { }

  ngOnInit() {}

}
