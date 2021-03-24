import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-left-sidebar',
  templateUrl: './main-left-sidebar.component.html',
  styleUrls: ['./main-left-sidebar.component.css']
})
export class MainLeftSidebarComponent implements OnInit {
  @Input() active_mod_id!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
