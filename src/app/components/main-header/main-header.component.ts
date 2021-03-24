import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @Input() heading_variables!: Object;
  @Input() view_type_name!: string;
  @Input() date_range!: string;
  @Input() module_name!: string;
  constructor() { }

  ngOnInit(): void {

  }

}
