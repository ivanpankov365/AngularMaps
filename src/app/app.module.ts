import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCW9yp58Dov84BzaGvRRccStdTKoiNuTCE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
