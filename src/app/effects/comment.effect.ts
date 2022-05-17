import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/comment.action';
import { CommentService } from '../services/comment.service';

@Injectable()
export class CommentEffects {

  constructor(
    private actions$: Actions,
    private userService: CommentService
  ) { }

  


  getCommentJson$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getCommentJson),
    switchMap(() =>
      this.userService.getCommentJson().pipe(
        map(data => fromActions.setLocalCommentData({payload: data}))
      )
    )
  ));
  deletComment$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Delete),
    map(action => action.payload),
    switchMap((id) =>
      this.userService.DeleteCommentJson(id).pipe(
        map(data => fromActions.setLocalCommentData({payload: data}))
      )
    )
  ));
  UpdateComment$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Update),
    map(action => action.payload),
    switchMap((comm) =>
      this.userService.UpdateCommentJson(comm).pipe(
        map(data => fromActions.setLocalCommentData({payload: data}))
      )
    )
  ));

      }