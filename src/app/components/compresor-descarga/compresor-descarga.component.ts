import { Component } from '@angular/core';
import { CompresorServicesService } from '../../services/compresor-services.service';

@Component({
  selector: 'app-compresor-descarga',
  templateUrl: './compresor-descarga.component.html',
  styleUrl: './compresor-descarga.component.css'
})
export class CompresorDescargaComponent {

constructor(private _service:CompresorServicesService){}

descargarImagene(){
  this._service.downloadImage();
}

}
