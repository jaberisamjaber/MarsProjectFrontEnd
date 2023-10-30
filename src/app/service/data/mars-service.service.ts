import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarsServiceService {

  constructor(private http : HttpClient) { }

  retrievePhotos(sol : number, camera : string){

    let params = new HttpParams();
    params = params.append('sol', sol);
    params = params.append('camera', camera)

    return this.http.get<any>(`https://mars-backend-a4770247eecf.herokuapp.com/photos`, {params: params});
  }


}
