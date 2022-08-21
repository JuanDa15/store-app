import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnExit } from 'src/app/utils/guards/exit.guard';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  constructor() { }

  async onExit() {
    const answer = await this._exitConfirmation().then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    })

  return answer;
  };


  private _exitConfirmation( ): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: 'Alert',
      text: 'Are you sure you want to exit ?',
      showCancelButton: true,
      showConfirmButton: true,
    })
  }
}
