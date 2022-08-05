import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }

}
