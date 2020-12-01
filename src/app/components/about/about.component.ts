import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public pretitle: string;
  public title: string; //Propiedad título
  public subtitle: string;
  public email: string;
  public web: string;

  constructor() {
    this.pretitle = "Página personal de";
    this.title = "Ángel Garrido Álvarez";
    this.subtitle = "Desarrollador Fullstack";
    this.email = "contacto@angeldeveloper.es";
    this.web = "www.angeldeveloper.es"
  }

  ngOnInit(): void {
  }

}
