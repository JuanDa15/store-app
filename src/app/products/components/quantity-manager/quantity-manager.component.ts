import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'quantity-manager',
  templateUrl: './quantity-manager.component.html',
  styleUrls: ['./quantity-manager.component.scss']
})
export class QuantityManagerComponent implements OnInit {

  public quantity!: number;

  @Input('quantity') set setQuantity(quantity: number){
    this.quantity =  quantity;
  }

  @Output('onChangeValue') changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public updateValueInput(): void {
    this.changeValue.emit(this.quantity);
  }

  public updateValue(quantity: number): void {
    this.quantity += quantity;
    this.changeValue.emit(this.quantity);
  }

}
