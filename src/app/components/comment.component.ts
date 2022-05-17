
import {Component, OnInit} from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromReducer from '../reducers/user.reducer';
import * as fromCommentReducer from '../reducers/comment.reducers';
import * as fromCommentActions from '../actions/comment.action';
import { UserState } from '../reducers/app.states';
import { user } from '../models/users';
import { comment, Usercomment} from '../models/comment';
@Component({
  selector: 'comment-list',
  templateUrl:'comment.component.html',

})

export class CommentComponent implements OnInit {

  users$?: Observable<user[] | undefined>;
  usersList$?: user[] ;
  result = new BehaviorSubject([]);
  constructor( private store: Store<UserState>) {
  
    store.select(fromReducer.getUsers).subscribe((data:user[]|undefined)=>{this.usersList$ = data});
    
     store.select(fromCommentReducer.getComments).subscribe((data:comment[]|undefined)=>
    {
      
var name=(id:number|undefined)=>{return this.usersList$?.find(function(element) {return element.id == id})?.displayName}
var myData = data?.reduce(function (r, a) {

  r[a.parentCommentId ||0] = r[a.parentCommentId ||0]|| {displayName:name(a.ownerId), id:a.id,parentCommentId:a.parentCommentId,ownerId:a.ownerId,txt:a.txt,createdAt:a.createdAt, deletedAt:a.deletedAt,comments:[]};
  r[a.parentCommentId||0].comments.push({displayName:name(a.ownerId), id:a.id,parentCommentId:a.parentCommentId,ownerId:a.ownerId,txt:a.txt,createdAt:a.createdAt, deletedAt:a.deletedAt});
  return r;
}, Object.create(null));
//result=result.sort((a:Usercomment,b:Usercomment) => a.deletedAt - b.deletedAt)
if(myData){
  this.result.next(myData);
}


    }) ;
  }

  ngOnInit() {
    this.store.dispatch(fromCommentActions.getCommentJson());
   
  }
}