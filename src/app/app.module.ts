import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompresorComponent } from './components/compresor/compresor.component';
import { CompresorDescargaComponent } from './components/compresor-descarga/compresor-descarga.component';
import { NgxImageCompressService } from 'ngx-image-compress';


@NgModule({
  declarations: [
    AppComponent,
    CompresorComponent,
    CompresorDescargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideClientHydration(),
    NgxImageCompressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
