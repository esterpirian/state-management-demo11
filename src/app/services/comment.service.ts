import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable,of } from 'rxjs';
import { comment,Usercomment } from '../models/comment';
import{Store} from '@ngrx/store'
import{UserState} from '../reducers/app.states'
import * as  fromCommentReducer from '../reducers/comment.reducers'


fromCommentReducer

@Injectable()
export class CommentService {
    constructor(private http: HttpClient,private store: Store<UserState>) { }

    
    resettCommentJson(): Observable<comment[]> {
       
        return this.http.get<comment[]>('/assets/comments.json')
     
    
  }
  getCommentJson(): Observable<comment[]> {
    var existingComments = localStorage.getItem("dataSource")?JSON.parse(localStorage.getItem("dataSource") ||""):undefined;   
    if (existingComments?.length>0)
      {
        
      
      
        return  (of(existingComments)) as Observable<comment[]>;
      }
      else{
        return this.http.get<comment[]>('/assets/comments.json')
      }
 

}
   DeleteCommentJson(id:string|undefined): Observable<comment[]> {
    
    
      
      var existingComments = localStorage.getItem("dataSource")?JSON.parse(localStorage.getItem("dataSource") ||""):undefined;   
      if (existingComments?.length>0)
      {
        return  (of(existingComments)) as Observable<comment[]>;
      }
      else{
        return this.http.get<comment[]>('/assets/comments.json')
      }
  
 

  }
  UpdateCommentJson(comm:comment|undefined): Observable<comment[]> {
    
  
     
    var existingComments = localStorage.getItem("dataSource")?JSON.parse(localStorage.getItem("dataSource") ||""):undefined;   
    if (existingComments?.length>0)
    {
      return  (of(existingComments)) as Observable<comment[]>;
    }
    else{
      return this.http.get<comment[]>('/assets/comments.json')
    }



}



  
}
