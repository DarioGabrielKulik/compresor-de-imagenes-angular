import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompresorComponent } from './components/compresor/compresor.component';
import { CompresorDescargaComponent } from './components/compresor-descarga/compresor-descarga.component';

const routes: Routes = [
  {path:'',component:CompresorComponent},
  {path:'compresor',component:CompresorComponent},
  {path:'descarga',component:CompresorDescargaComponent},
  {path:'**',component:CompresorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
