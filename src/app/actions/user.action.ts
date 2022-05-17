import { createAction, props } from '@ngrx/store';
import { user } from '../models/users';
export const getUserJson = createAction('[user] getUserJson');
export const setLocalData = createAction('[user] setLocalData', props<{ payload: user[]}>());
