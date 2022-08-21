import { Component, OnInit } from '@angular/core';
import { FilesService } from './utils/services/files.service';
import { TokenService } from './utils/services/token.service';
import { AuthService } from './website/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'store-app';

  constructor(private _fileService: FilesService,
              private _authService: AuthService,
              private _tokenService: TokenService) {}

  ngOnInit(): void {
    const token = this._tokenService.get();

    if ( token ) {
      this._authService.profile().subscribe(() => {})
    }
  }

  download() {
    this._fileService.getFile().subscribe({
      next: ( ) => console.log('xd')
    })
  }
}
