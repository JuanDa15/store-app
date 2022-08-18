import { Component } from '@angular/core';
import { FilesService } from './utils/services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-app';

  constructor(private _fileService: FilesService) {}

  download() {
    this._fileService.getFile().subscribe({
      next: ( ) => console.log('xd')
    })
  }
}
