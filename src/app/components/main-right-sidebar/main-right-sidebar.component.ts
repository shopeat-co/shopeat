import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-right-sidebar',
  templateUrl: './main-right-sidebar.component.html',
  styleUrls: ['./main-right-sidebar.component.css']
})
export class MainRightSidebarComponent implements OnInit {
  @Input() curr_shop_list!: string[];
  constructor() {
    // this.curr_shop_list = this.curr_shop_list;
   }

  ngOnInit(): void {
  }

}
