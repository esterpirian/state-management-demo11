import { state } from '@angular/animations';
import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/comment.action';
import { CommentState } from './app.states';

export const initialState: CommentState = {comment:[],id:undefined,comm:{}};

// Creating reducer
const _commentReducer = createReducer(
  initialState,
  
  on(fromActions.getCommentJson, (state) => ({})),
  on(fromActions.setLocalCommentData, (state, {payload}) => ({comment:payload})),
  on(fromActions.Delete, (state, {payload}) => ({id:payload})),
  on(fromActions.Update,(state,{payload})=>({comm:payload}))
);

export function commentReducer(state: any, action: Action) {
  return _commentReducer(state, action);
}

// Creating selectors
export const getCommentState = createFeatureSelector<CommentState>('commentState');

export const getComments = createSelector(
    getCommentState, 
    (state: CommentState) => state.comment 
);

