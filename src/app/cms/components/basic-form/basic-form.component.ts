import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, OnDestroy {

  name = new FormControl('xd');
  email = new FormControl('');
  phone = new FormControl('');
  color = new FormControl('#000000');
  date = new FormControl('');
  month = new FormControl('');
  age = new FormControl(12);
  password = new FormControl('');
  price = new FormControl('50');
  week = new FormControl('');
  time = new FormControl('');
  search = new FormControl('');
  description = new FormControl('');
  url = new FormControl('');
  male = new FormControl('');
  photo = new FormControl('');
  radio = new FormControl('');

  private _destroy$ = new Subject();

  constructor() { }

  ngOnDestroy(): void {
    this._destroy$.next('');
    this._destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.name.valueChanges.pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }

}
