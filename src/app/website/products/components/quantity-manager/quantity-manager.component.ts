import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'quantity-manager',
  templateUrl: './quantity-manager.component.html',
  styleUrls: ['./quantity-manager.component.scss']
})
export class QuantityManagerComponent {

  public quantity!: number;

  @Input() set setQuantity(quantity: number){
    this.quantity =  quantity;
  }

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public updateValueInput(): void {
    this.changeValue.emit(this.quantity);
  }

  public updateValue(quantity: number): void {
    this.quantity += quantity;
    this.changeValue.emit(this.quantity);
  }

}
