import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { RedditComponent } from './reddit/reddit.component';
import { StoreService } from "./store.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ArticleComponent,
    RedditComponent
  ],
  providers: [StoreService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
