import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
// import { ArticleComponent } from './components/article.component';
// import { LoginComponent } from './components/login.component';
import { reducers } from './reducers/reducers';
// import { ArticleEffects } from './effects/article.effects';
// import { ArticleService } from './services/article.service';
// import { LoginEffects } from './effects/login.effects';
// import { LoginService } from './services/login.sevice';

import{UserComponent} from './components/user.component';
import { UserEffects } from './effects/user.effect';
import{UserService} from './services/user.service';
import{CommentComponent} from './components/comment.component';
import { CommentEffects } from './effects/comment.effect';
import{CommentService} from './services/comment.service';
import{ApplicationHttpClient,applicationHttpClientCreator} from'./extend/http-client';
import{listComment} from './components/comment-list.component';
import{ViewComment} from './components/comment-view.component';
//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([UserEffects,CommentEffects])//ArticleEffects,LoginEffects]),
        // InMemoryWebApiModule.forRoot(TestData)
    ],
    declarations: [
        AppComponent,
       
        UserComponent,
        CommentComponent,
        listComment,
        ViewComment

    ],
    providers: [
        //ArticleService,LoginService,
        UserService,CommentService
       
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
