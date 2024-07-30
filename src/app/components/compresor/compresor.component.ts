import { Component, inject, Inject } from '@angular/core';
import { CompresorServicesService } from '../../services/compresor-services.service';

@Component({
  selector: 'app-compresor',
  templateUrl: './compresor.component.html',
  styleUrl: './compresor.component.css'
})
export class CompresorComponent {
 constructor(private _compresor:CompresorServicesService){}

 obtenerImagen(){
  this._compresor.compressFile();
 }
}


