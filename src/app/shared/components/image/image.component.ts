import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'image',
  template: `
    <img [src]="imgSrc" [alt]="this.imgAlt" (error)="imgError()"/>
  `,
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  private _defaultImage: string;
  public imgSrc: string;
  public imgAlt: string;

  @Input('dataSrc') set setImage( urlImg: string ) {
    this.imgSrc = urlImg;
  }

  @Input('dataAlt') set setAlt( altImg: string ) {
    this.imgAlt = altImg;
  }

  @Input() id!: number;

  @Output() loaded: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.imgSrc = '';
    this.imgAlt = '';
    this._defaultImage = 'assets/images/img-placeholder.svg';
  }

  ngOnInit(): void {}

  public imgError(): void {
    this.imgSrc = this._defaultImage;
    this.loaded.emit(this.id);
  }

}
