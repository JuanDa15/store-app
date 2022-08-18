import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  private _categoryID: string | null;

  constructor(private _ar: ActivatedRoute ) {
    this._categoryID = null;
  }

  ngOnInit(): void {
    this._ar.paramMap.subscribe({
      next: (params) => {
        this._categoryID = params.get('id');
      }
    })
  }

}
