import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable,of } from 'rxjs';
import { user } from '../models/users';
import{map} from 'rxjs/operators'


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

   
    getUserJson(): Observable<user[]> {
       
        return this.http.get<user[]>('/assets/users.json')
     
    
  }
         
}