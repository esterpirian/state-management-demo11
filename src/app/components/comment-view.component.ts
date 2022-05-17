import{FormBuilder,Validator} from'@angular/forms'
import{Store} from '@ngrx/store'
import{UserState} from '../reducers/app.states';
import{comment} from '../models/comment'
import * as fromCommentActions from '../actions/comment.action';
import * as fromCommentReducer from '../reducers/comment.reducers';
import { Component,OnInit,ChangeDetectionStrategy,
		ChangeDetectorRef,Input, Output,EventEmitter } from '@angular/core';    

		import { Observable } from 'rxjs';
        import{Usercomment} from '../models/comment'
@Component({
	selector: 'view-comment',
	templateUrl: 'comment-view.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComment implements OnInit {
   
	@Input() data?: Observable<Usercomment>;
    @Output() DeleteEvent = new EventEmitter<Usercomment>();
    @Output() UpdateEvent = new EventEmitter<Usercomment>();
    isClick:boolean=false;
	comment: Usercomment={};
	constructor(private cd: ChangeDetectorRef,private store: Store<UserState>,private fb:FormBuilder) { 
        
    }
    updateForm = this.fb.group({
        comm: ['']
        
    });
	ngOnInit() {
			  this.data?.subscribe(item => {
				this.comment = item;
				this.cd.markForCheck();
			  });
			}
	delete(){
        this.DeleteEvent.emit(this.comment)
        
    }
    update(){
         this.comment.txt=this.updateForm.controls["comm"].value;
         this.UpdateEvent.emit({ id:this.comment.id,parentCommentId:this.comment.parentCommentId,ownerId:this.comment.ownerId,txt:this.comment.txt,createdAt:this.comment.createdAt, deletedAt:new Date()})
        
    }
	
}	