import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';


@Injectable({
  providedIn: 'root'
})
export class CompresorServicesService {
  router = inject(Router)
  imgResultBeforeCompression: string = '';
  imgResultAfterCompression: string = '';

  constructor(private imageCompress: NgxImageCompressService) {}

  compressFile() {
    this.imageCompress.uploadFile().then(({image, orientation}) => {     
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompression = result;
          this.router.navigate(['/descarga'])
          console.log('Tamaño en bytes después de la compresión:', this.imageCompress.byteCount(result));
        }
      );
    });
  }

  downloadImage() {
    const link = document.createElement('a');
    link.download = 'imagen_comprimida.jpg';
    link.href = this.imgResultAfterCompression;
    link.click();
  }

 
}
