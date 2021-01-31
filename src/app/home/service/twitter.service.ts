import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../model/data.model';
import { ExampleUserModel } from '../model/example.user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class TwitterService {

  baseUrl = 'https://api.twitter.com/2';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${environment.bearerToken}`,
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  getUserExample(): Observable<DataModel<ExampleUserModel>> {
    const url = `${this.baseUrl}/users/by/username/bni?user.fields=name,profile_image_url,username`;

    return this.http.get<DataModel<ExampleUserModel>>(url, this.httpOptions);
  }
}
