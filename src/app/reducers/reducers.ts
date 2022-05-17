import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import * as fromUserReducer from './user.reducer';
import * as fromCommentReducer from './comment.reducers';
export const reducers: ActionReducerMap<AppState> = {
  
  userState:fromUserReducer.userReducer,
  commentState:fromCommentReducer.commentReducer
};
 