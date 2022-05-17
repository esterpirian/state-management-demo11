import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/user.action';
import { UserState } from './app.states';

export const initialState: UserState = {users:[]};

// Creating reducer
const _useReducer = createReducer(
  initialState,
  
  on(fromActions.getUserJson, (state) => ({})),
  on(fromActions.setLocalData, (state, {payload}) => ({users:payload}))
);

export function userReducer(state: any, action: Action) {
  return _useReducer(state, action);
}

// Creating selectors
export const getUserState = createFeatureSelector<UserState>('userState');

export const getUsers = createSelector(
    getUserState, 
    (state: UserState) => state.users 
);

