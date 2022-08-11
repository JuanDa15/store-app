import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  public offset: number = 0;

  @Input() limit!: number;
  @Input() set setOffset( offset: number) {
    this.offset = offset;
  }

  @Output() changePage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public pagination( limit: number ): void {
    this.changePage.emit(limit);
  }

}
