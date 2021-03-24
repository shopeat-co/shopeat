import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-grid-element',
  templateUrl: './main-grid-element.component.html',
  styleUrls: ['./main-grid-element.component.css'],
  inputs:['day']
})
export class MainGridElementComponent implements OnInit {
  //to do - data w jakimś jednym obiekcie przekazywanym do klasy
  @Input()
  day!: string;
  @Input() 
  breakfast_list!: string[];
  @Input() 
  lunch_list!: string[];
  @Input() 
  dinner_list!: string[]
  constructor() { 
    
  } 

  ngOnInit(): void {
  }
}
