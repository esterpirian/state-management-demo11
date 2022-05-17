import { createAction, props } from '@ngrx/store';
import { comment } from '../models/comment';
export const getCommentJson = createAction('[comment] getCommentJson');
export const setLocalCommentData = createAction('[comment] setLocalCommentData', props<{ payload: comment[]}>());
export const Delete = createAction('[comment] Delete', props<{ payload:string|undefined}>());
export const Update = createAction('[comment] Update', props<{ payload:comment|undefined}>());