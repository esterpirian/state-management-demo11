import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/user.action';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  


  getUserJson$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getUserJson),
    switchMap(() =>
      this.userService.getUserJson().pipe(
        map(data => fromActions.setLocalData({payload: data}))
      )
    )
  ));

      }