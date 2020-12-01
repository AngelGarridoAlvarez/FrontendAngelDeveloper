//Servicio para subir proyectos que vamos a utilizar en create.component.ts

import {Injectable} from "@angular/core";
import {Global} from './global';

Injectable()

export class UploadService {
  public url: string;

  constructor() {
    this.url = Global.url
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
    return new Promise(function (resolve, reject) {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      //Recorre todos los archivos que me vayan llegando y adjúntalo en el formulario, con el nombre name, añade el archivo files[i] y recoge su nombre files[i].name
      for (var i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name);
      }

      //Hacemos la petición AJAX: (cuando haya algún cambio en xhr se ejecuta la función)

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { //si el readyState de la petición xhr es 4 (el valor es ese y hay que saberlo)
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST', url, true);
      xhr.send(formData);

    });
  }

}
