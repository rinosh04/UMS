import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getApi() {
    return this.httpClient.get<any>("http://localhost:3000/posts")
      .pipe(map((result: any) => {
        return result;
      }))
  }

  postApi(data: any) {
    return this.httpClient.post<any>("http://localhost:3000/posts", data)
      .pipe(map((result: any) => {
        return result;
      }))
  }

  putApi(id, data) {
    return this.httpClient.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((result: any) => {
        return result;
      }))
  }

  deleteApi(id) {
    return this.httpClient.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((result: any) => {
        return result;
      }))
  }
}
