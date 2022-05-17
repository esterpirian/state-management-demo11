
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import{UserService} from '../services/user.service'
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import * as fromReducer from '../reducers/user.reducer';
import * as fromActions from '../actions/user.action';

import { UserState } from '../reducers/app.states';
import { user } from '../models/users';
@Component({
  selector: 'user-list',
  templateUrl:'user.component.html',

})
export class UserComponent implements OnInit {

  users$: Observable<user[] | undefined>;
  constructor( private store: Store<UserState>) {
  
    this.users$ = store.select(fromReducer.getUsers) ;
  }

  ngOnInit() {
    this.store.dispatch(fromActions.getUserJson());
    // this._ser.getUserJson().then((data:any |undefined)=>
    // {console.log(data)});
  }
}