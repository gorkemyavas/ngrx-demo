import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { StoreModule }        from '@ngrx/store';
import { counterReducer }     from './reducer/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { HttpClientModule }   from '@angular/common/http';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { count: counterReducer }
      , {

      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
