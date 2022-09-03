import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, OnDestroy {

  name = new FormControl('', [Validators.required]);
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
  terms = new FormControl('');
  photo = new FormControl('');
  gender = new FormControl('');
  zones = new FormControl('');


  category = new FormControl('1');
  multipleCategory = new FormControl('');

  private _destroy$ = new Subject();

  constructor(private _fb: FormBuilder) { }

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
  // Validador general de estados de formulario, reutilizeble
  // export class GeneralValidators {
  //   public hasError = (
  //     form: FormGroup,
  //     controlName: string,
  //     errorName: string
  //   ) => {
  //     return form.controls[controlName].hasError(errorName);
  //   };
  // }

}
