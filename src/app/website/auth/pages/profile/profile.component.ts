import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: User | undefined;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.userData$.subscribe(data => {
      this.profile = data;
    })
  }

}
