import{Store} from '@ngrx/store'
import{UserState} from '../reducers/app.states';
import{comment} from '../models/comment'
import * as fromCommentActions from '../actions/comment.action';
import * as fromCommentReducer from '../reducers/comment.reducers';
import { Component,OnInit,ChangeDetectionStrategy,
		ChangeDetectorRef,Input } from '@angular/core';    

		import { Observable,BehaviorSubject } from 'rxjs';
        import{Usercomment} from '../models/comment'
@Component({
	selector: 'list-comment',
	templateUrl: 'comment-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class listComment implements OnInit {
	@Input() data?: Observable<Usercomment[]>;
	comIn=new BehaviorSubject({});
	comment: Usercomment[]=[];
	constructor(private cd: ChangeDetectorRef,private store: Store<UserState>) { 
		
       
	}
	delete(val:Usercomment){
		var d=this.comment?.filter((obj) => {return obj.id!=val?.id && obj.parentCommentId?.toString()!=val?.id} );
         if(d){
            localStorage.setItem('dataSource', JSON.stringify(d));
            this.store.dispatch(fromCommentActions.Delete({payload: val.id || undefined}));
         }
        
    }
	update(val:comment){
	
        var myData = this.comment?.reduce(function (r, a) {
        r[a.id ||0] = r[a.id ||0]|| [];
        r[a.id||0].push(a.id==val.id?val:a);
        return r;
      }, Object.create(null));
      if(myData.length>0){
		localStorage.setItem('dataSource', JSON.stringify(myData));
		this.store.dispatch(fromCommentActions.Update({payload: val || undefined}));
	  }

     
	}
	ngOnInit() {
			  this.data?.subscribe(item => {
				this.comment =   Object.values(item);
				this.cd.markForCheck();
			  });
			}
	setval(val:Usercomment|undefined){
       this.comIn.next(val||{})
	}
	
	
}	