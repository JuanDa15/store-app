import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { saveAs} from 'file-saver'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private _http:HttpClient) { }

  public getFile(name: string = 'xd.pdf', url: string = 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', type: string = 'application/pdf'){
    return this._http.get(url, {responseType: 'blob'})
      .pipe(
        tap( resp => {
          const blob =  new Blob([resp], {type: type});
          saveAs(blob, name);
        }),
        map( () =>  true )
      )
  }

  public uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file','file');
    return this._http.post(`${environment.api}/upload`, dto, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
