//import { Article,IsLogin,Login } from '../models/article';
import{user}from '../models/users';
import{comment}from '../models/comment';
export interface AppState {
	userState:UserState ,
	commentState:CommentState
	
}


export interface UserState {
	users?:user[];
	
}
export interface CommentState {
	comment?:comment[];
	id?:string;
	comm?:comment
	
}