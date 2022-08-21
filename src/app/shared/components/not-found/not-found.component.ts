import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public homeUrl: string;

  constructor(private _router: Router) {
    this.homeUrl = '';
  }

  ngOnInit(): void {
    const url = this._router.url;

    if ( this._router.url.includes('v1')) {
      this.homeUrl = '/v1/products/list';
    }

    if ( this._router.url.includes('cms')) {
      this.homeUrl = '/cms/grid';
    }
  }

}
